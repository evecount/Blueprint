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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useAppContext } from '@/context/AppProvider';
import { initialQuizCodification } from '@/ai/flows/initial-quiz-codification';
import type { QuizQuestion } from '@/lib/types';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Resource name must be at least 3 characters.' }),
  type: z.enum(['Textbook', 'Mock Exam'], { required_error: 'Please select a resource type.' }),
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

  const readFileAsDataURI = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsUploading(true);
    try {
      const file = values.file[0];
      if (file.type !== 'application/pdf') {
        toast({
          variant: 'destructive',
          title: 'Invalid File Type',
          description: 'Please upload a PDF file.',
        });
        return;
      }

      const pdfDataUri = await readFileAsDataURI(file);

      let codifiedQuestions: QuizQuestion[] | undefined = undefined;

      if (values.type === 'Mock Exam') {
        const result = await initialQuizCodification({
          pdfDataUri: pdfDataUri,
          resourceName: values.name,
        });

        try {
          codifiedQuestions = JSON.parse(result.codifiedQuestions);
        } catch (parseError) {
          console.error("Failed to parse codified questions:", parseError);
          throw new Error("The AI returned an invalid format. Please check the PDF content or try again.");
        }
      }

      addResource({ name: values.name, type: values.type, pdfDataUri }, codifiedQuestions);

      toast({
        title: 'Upload Successful',
        description: `"${values.name}" has been added to your resources.`,
      });
      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Upload Failed',
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
          <DialogTitle className="font-headline">Upload New Resource</DialogTitle>
          <DialogDescription>Add a new textbook or mock exam to start generating quizzes.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resource Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Chapter 1, Midterm Practice" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resource Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a resource type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Textbook">Textbook</SelectItem>
                      <SelectItem value="Mock Exam">Mock Exam</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="file"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>PDF File</FormLabel>
                  <FormControl>
                    <Input type="file" accept="application/pdf" onChange={(e) => onChange(e.target.files)} {...rest} />
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
                    Uploading...
                  </>
                ) : (
                  <>
                    <UploadCloud className="mr-2 h-4 w-4" />
                    Upload & Codify
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
