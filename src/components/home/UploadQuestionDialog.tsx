'use client';

import { useState, useRef, ChangeEvent, useMemo } from 'react';
import { FileText, Gift, Image as ImageIcon, Loader2, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { solveQuestion, SolveQuestionOutput } from '@/ai/flows/solve-question-flow';
import { generateSingleQuestion, GenerateSingleQuestionOutput } from '@/ai/flows/generate-single-question-flow';
import { useAppContext } from '@/context/AppProvider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Label } from '../ui/label';

type GeneratedQuestion = SolveQuestionOutput | GenerateSingleQuestionOutput;

function GeneratedQuestionPreview({ question }: { question: GeneratedQuestion }) {
  return (
    <Card className="mt-6 bg-muted/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="text-accent" /> AI Generated Question
        </CardTitle>
        <CardDescription>Review the generated question before contributing it to a deck.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="font-semibold">{question.question}</p>
        <div className="space-y-2">
          {question.answers.map((answer, index) => (
            <div
              key={index}
              className={`p-3 border rounded-md text-sm ${index === question.correctAnswerIndex ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-border'}`}
            >
              {answer}
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-semibold">Rationale:</h4>
          <p className="text-sm text-muted-foreground">{question.rationale}</p>
        </div>

        {'sourceDetails' in question && question.sourceDetails && Object.values(question.sourceDetails).some(v => v) && (
            <div className="pt-4 mt-4 border-t">
                <h4 className="mb-2 font-semibold">Extracted Source Details</h4>
                <div className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2 text-muted-foreground">
                    {Object.entries(question.sourceDetails).map(([key, value]) => 
                        value ? (
                            <div key={key} className="flex flex-wrap gap-x-2">
                                <span className="font-medium capitalize text-foreground">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                <span>{value}</span>
                            </div>
                        ) : null
                    )}
                </div>
            </div>
        )}
      </CardContent>
    </Card>
  );
}


type UploadQuestionDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function UploadQuestionDialog({ open, onOpenChange }: UploadQuestionDialogProps) {
  const { resources, addQuestionToResource } = useAppContext();
  const { toast } = useToast();
  
  const [activeTab, setActiveTab] = useState('text');
  const [questionText, setQuestionText] = useState('');
  const [imageDataUri, setImageDataUri] = useState<string | null>(null);
  const [imageFileName, setImageFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedQuestion, setGeneratedQuestion] = useState<GeneratedQuestion | null>(null);

  const handleClose = () => {
    setQuestionText('');
    setImageDataUri(null);
    setImageFileName(null);
    setSelectedDeckId(null);
    setGeneratedQuestion(null);
    setIsLoading(false);
    onOpenChange(false);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        toast({
            variant: 'destructive',
            title: 'Invalid File Type',
            description: 'Please upload an image file (e.g., PNG, JPG).',
        });
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        setImageDataUri(e.target?.result as string);
        setImageFileName(file.name);
    };
    reader.onerror = () => {
        toast({
            variant: 'destructive',
            title: 'File Read Error',
            description: 'There was an error reading your file.',
        });
    };
    reader.readAsDataURL(file);
  };

  const handleGenerateQuestion = async () => {
    if (!selectedDeckId) {
      toast({ variant: 'destructive', title: 'Please select a deck.' });
      return;
    }
    
    setIsLoading(true);
    setGeneratedQuestion(null);
    const selectedDeck = resources.find(r => r.id === selectedDeckId);
    const context = selectedDeck?.name || 'General Knowledge';

    try {
      let result: GeneratedQuestion;
      if (activeTab === 'text') {
        if (!questionText.trim()) {
          toast({ variant: 'destructive', title: 'Please enter a question.' });
          setIsLoading(false);
          return;
        }
        result = await generateSingleQuestion({ questionText, context });
      } else {
        if (!imageDataUri) {
          toast({ variant: 'destructive', title: 'Please upload an image.' });
          setIsLoading(false);
          return;
        }
        result = await solveQuestion({ imageDataUri, context });
      }

      if (result.question === "Invalid Input" || result.question === "Invalid Input Detected" || result.answers.length === 0) {
        throw new Error("The AI detected invalid or unsafe content in your submission. Please try again with an appropriate academic question.");
      }

      setGeneratedQuestion(result);
      toast({
        title: 'Question Generated!',
        description: 'Review the question below and click "Contribute" to add it to the deck.',
      });

    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: error instanceof Error ? error.message : 'The AI could not generate a question. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleContributeQuestion = () => {
    if (!generatedQuestion || !selectedDeckId) return;

    addQuestionToResource(selectedDeckId, generatedQuestion);
    toast({
      title: 'Thank You!',
      description: 'Your question has been added to the deck.',
    });
    handleClose();
  };

  const isGenerateDisabled = isLoading || !selectedDeckId || (activeTab === 'text' && !questionText.trim()) || (activeTab === 'image' && !imageDataUri);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-headline">Contribute a Question</DialogTitle>
          <DialogDescription>
            Help the community by adding a new question. The AI will convert it into a multiple-choice format.
          </DialogDescription>
        </DialogHeader>

        {!generatedQuestion ? (
            <div className="space-y-4">
                 <Select onValueChange={setSelectedDeckId} value={selectedDeckId ?? ''} disabled={isLoading}>
                    <SelectTrigger>
                    <SelectValue placeholder="1. Select a deck to contribute to..." />
                    </SelectTrigger>
                    <SelectContent>
                    {resources.map((deck) => (
                        <SelectItem key={deck.id} value={deck.id}>
                        {deck.name}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="text"><FileText className="mr-2"/>Enter Text</TabsTrigger>
                        <TabsTrigger value="image"><ImageIcon className="mr-2"/>Upload Image</TabsTrigger>
                    </TabsList>
                    <TabsContent value="text" className="p-1">
                        <Label htmlFor="question-text" className="sr-only">Your Question</Label>
                        <Textarea
                        id="question-text"
                        placeholder="2. Type or paste your question here..."
                        rows={5}
                        value={questionText}
                        onChange={(e) => setQuestionText(e.target.value)}
                        disabled={isLoading}
                        />
                    </TabsContent>
                    <TabsContent value="image" className="p-1">
                        <Input
                            id="image-upload"
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept="image/*"
                            disabled={isLoading}
                        />
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={isLoading}
                        >
                            <ImageIcon className="mr-2"/>
                            {imageFileName ? `Selected: ${imageFileName}` : '2. Choose an Image'}
                        </Button>
                         {imageDataUri && (
                            <div className="relative mt-2">
                                <img src={imageDataUri} alt="Preview" className="w-full h-auto border rounded-md max-h-48" />
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    className="absolute top-1 right-1 h-7 w-7"
                                    onClick={() => {
                                        setImageDataUri(null);
                                        setImageFileName(null);
                                        if(fileInputRef.current) fileInputRef.current.value = '';
                                    }}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        ) : (
            <GeneratedQuestionPreview question={generatedQuestion} />
        )}
        

        <DialogFooter>
            {generatedQuestion ? (
                <div className="flex justify-between w-full">
                    <Button variant="outline" onClick={() => setGeneratedQuestion(null)}>Back to Edit</Button>
                    <Button onClick={handleContributeQuestion}>
                        <Gift className="mr-2" />
                        Confirm and Contribute
                    </Button>
                </div>
            ) : (
                <Button onClick={handleGenerateQuestion} disabled={isGenerateDisabled}>
                    {isLoading ? <Loader2 className="mr-2 animate-spin" /> : <Sparkles className="mr-2" />}
                    Generate Question
                </Button>
            )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
