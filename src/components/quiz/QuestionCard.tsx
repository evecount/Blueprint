'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { QuizQuestion } from '@/lib/types';

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (selectedAnswer: number, isCorrect: boolean) => void;
}

export default function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelectAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
  };
  
  const isCorrect = selectedAnswer === question.correctAnswerIndex;

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg leading-relaxed font-normal font-body">{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {question.answers.map((answer, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectAnswer = question.correctAnswerIndex === index;
          
          return (
            <Button
              key={index}
              variant="outline"
              className={cn(
                'w-full justify-start h-auto py-3 text-left whitespace-normal',
                isAnswered && isCorrectAnswer && 'bg-green-100 border-green-400 text-green-800 hover:bg-green-200 dark:bg-green-900/50 dark:border-green-700 dark:text-green-300',
                isAnswered && isSelected && !isCorrectAnswer && 'bg-red-100 border-red-400 text-red-800 hover:bg-red-200 dark:bg-red-900/50 dark:border-red-700 dark:text-red-300'
              )}
              onClick={() => handleSelectAnswer(index)}
              disabled={isAnswered}
            >
              <div className="flex items-start w-full gap-4">
                <div className="flex items-center justify-center w-6 h-6 mt-1 font-bold rounded-full bg-primary/10 text-primary">
                    {String.fromCharCode(65 + index)}
                </div>
                <span className="flex-1">{answer}</span>
                 {isAnswered && isSelected && (isCorrect ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-red-600" />)}
                 {isAnswered && !isSelected && isCorrectAnswer && <CheckCircle2 className="w-5 h-5 text-green-600" />}
              </div>
            </Button>
          );
        })}
      </CardContent>
      {isAnswered && (
        <CardFooter className="flex flex-col items-start gap-4 p-4 mt-4 border-t bg-muted/50 sm:p-6">
            <div className="p-4 rounded-lg bg-background">
                <h3 className="mb-2 text-base font-semibold font-headline">Rationale</h3>
                <p className="text-sm text-muted-foreground">{question.rationale}</p>
            </div>
          <Button
            onClick={() => onAnswer(selectedAnswer!, isCorrect)}
            className="self-end"
          >
            Next Question
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
