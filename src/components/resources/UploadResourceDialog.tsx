'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, UploadCloud } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useAppContext } from '@/context/AppProvider';
import { generateQuiz } from '@/ai/flows/initial-quiz-codification';
import type { QuizQuestion } from '@/lib/types';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Deck name must be at least 3 characters.' }),
  file: z.any().refine((files) => files?.length === 1, 'File is required.'),
});

type UploadResourceDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function UploadResourceDialog({ open, onOpenChange }: UploadResourceDialogProps) {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const { addResource } = useAppContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsUploading(true);
    try {
      const file = values.file[0];
      if (file.type !== 'text/markdown' && !file.name.endsWith('.md')) {
        toast({
          variant: 'destructive',
          title: 'Invalid File Type',
          description: 'Please upload a Markdown (.md) file.',
        });
        setIsUploading(false);
        return;
      }

      const content = await readFileAsText(file);

      const result = await generateQuiz({
        content: content,
        resourceName: values.name,
      });

      let codifiedQuestions: QuizQuestion[] = [];
      try {
        codifiedQuestions = JSON.parse(result.codifiedQuestions);
      } catch (parseError) {
        console.error("Failed to parse codified questions:", parseError);
        throw new Error("The AI returned an invalid format. Please check the file content or try again.");
      }

      if (codifiedQuestions.length === 0) {
        throw new Error("No questions could be generated from the provided file.");
      }

      addResource({ name: values.name, questions: codifiedQuestions });

      toast({
        title: 'Upload Successful',
        description: `"${values.name}" has been created and is ready to share.`,
      });
      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Failed to Create Deck',
        description: error instanceof Error ? error.message : 'An unknown error occurred. Please try again.',
      });
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">Create a Quiz Deck</DialogTitle>
          <DialogDescription>Upload a Markdown (.md) file with your notes to generate a quiz deck.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deck Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Biology Midterm, History Ch. 5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Markdown File</FormLabel>
                  <FormControl>
                    <Input type="file" accept=".md,text/markdown" onChange={(e) => onChange(e.target.files)} {...rest} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={isUploading}>
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <UploadCloud className="mr-2 h-4 w-4" />
                    Create Deck
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
