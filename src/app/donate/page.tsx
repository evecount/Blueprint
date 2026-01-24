'use client';

import { useState } from 'react';
import { BookCopy, Gift, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { solveQuestion, SolveQuestionOutput } from '@/ai/flows/solve-question-flow';
import { useAppContext } from '@/context/AppProvider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// A simplified display for the generated question.
function GeneratedQuestionPreview({ question }: { question: SolveQuestionOutput }) {
  return (
    <Card className="mt-6 bg-muted/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="text-accent" /> AI Generated Question
        </CardTitle>
        <CardDescription>Review the generated question before donating it.</CardDescription>
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
      </CardContent>
    </Card>
  );
}


export default function DonatePage() {
  const { resources, addQuestionToResource } = useAppContext();
  const { toast } = useToast();
  
  const [questionText, setQuestionText] = useState('');
  const [selectedDeckId, setSelectedDeckId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedQuestion, setGeneratedQuestion] = useState<SolveQuestionOutput | null>(null);

  const handleGenerateQuestion = async () => {
    if (!questionText.trim() || !selectedDeckId) {
      toast({
        variant: 'destructive',
        title: 'Missing Information',
        description: 'Please enter a question and select a deck to contribute to.',
      });
      return;
    }
    
    setIsLoading(true);
    setGeneratedQuestion(null);

    const selectedDeck = resources.find(r => r.id === selectedDeckId);

    try {
      const result = await solveQuestion({
        question: questionText,
        context: selectedDeck?.name || 'General Knowledge',
      });
      setGeneratedQuestion(result);
      toast({
        title: 'Question Generated!',
        description: 'Review the question below and click "Donate" to add it to the deck.',
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: 'The AI could not generate a question. Please try rephrasing your input.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDonateQuestion = () => {
    if (!generatedQuestion || !selectedDeckId) return;

    addQuestionToResource(selectedDeckId, generatedQuestion);
    toast({
      title: 'Thank You!',
      description: 'Your question has been added to the deck.',
    });

    // Reset state
    setQuestionText('');
    setGeneratedQuestion(null);
    setSelectedDeckId(null);
  };

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Contribute a Question</h1>
        <p className="text-muted-foreground">
          Stuck on homework? Get an answer from AI and contribute it to a public quiz deck.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Submit Your Question</CardTitle>
          <CardDescription>
            Enter your question and choose which deck it belongs to. Our AI will turn it into a multiple-choice question with a detailed answer.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="e.g., 'What is the primary risk of an ETN that is not present in an ETF?'"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            rows={4}
            disabled={isLoading}
          />
          <Select
            onValueChange={setSelectedDeckId}
            value={selectedDeckId ?? ''}
            disabled={isLoading}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a deck to contribute to..." />
            </SelectTrigger>
            <SelectContent>
              {resources.length > 0 ? (
                resources.map((deck) => (
                  <SelectItem key={deck.id} value={deck.id}>
                    {deck.name}
                  </SelectItem>
                ))
              ) : (
                <div className="p-4 text-sm text-center text-muted-foreground">
                  Create a deck first to start contributing questions.
                </div>
              )}
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGenerateQuestion} disabled={isLoading || !questionText.trim() || !selectedDeckId}>
            {isLoading ? (
              <Loader2 className="mr-2 animate-spin" />
            ) : (
              <Sparkles className="mr-2" />
            )}
            Get Answer & Generate Question
          </Button>
        </CardFooter>
      </Card>
      
      {generatedQuestion && (
        <div className="space-y-4">
            <GeneratedQuestionPreview question={generatedQuestion} />
            <div className="flex justify-end">
                <Button onClick={handleDonateQuestion} size="lg">
                    <Gift className="mr-2"/>
                    Confirm and Contribute
                </Button>
            </div>
        </div>
      )}

      {resources.length === 0 && !isLoading && (
          <Card className="flex flex-col items-center justify-center gap-4 py-12 text-center border-2 border-dashed">
            <BookCopy className="w-12 h-12 text-muted-foreground" />
            <h3 className="text-xl font-semibold font-headline">
              No Quiz Decks Found
            </h3>
            <p className="text-muted-foreground">
              You need to create a quiz deck before you can contribute questions to it.
            </p>
          </Card>
      )}

    </div>
  );
}
