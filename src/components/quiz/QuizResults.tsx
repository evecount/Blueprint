'use client';

import { Check, Home, Repeat, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { QuizQuestion } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Pie,
  PieChart,
} from 'recharts';
import type { ChartConfig } from '@/components/ui/chart';

interface QuizResultsProps {
  questions: QuizQuestion[];
  userAnswers: number[];
  score: number;
  resourceName: string;
}

const chartConfig = {
  correct: { label: 'Correct', color: 'hsl(var(--chart-1))' },
  incorrect: { label: 'Incorrect', color: 'hsl(var(--destructive))' },
} satisfies ChartConfig;

export default function QuizResults({ questions, userAnswers, score, resourceName }: QuizResultsProps) {
  const router = useRouter();
  const percentage = Math.round((score / questions.length) * 100);

  const chartData = [
    { name: 'correct', value: score, fill: 'var(--color-correct)' },
    { name: 'incorrect', value: questions.length - score, fill: 'var(--color-incorrect)' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader className="items-center text-center">
          <CardTitle className="text-3xl font-bold font-headline">Quiz Complete!</CardTitle>
          <CardDescription>Results for "{resourceName}"</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-8">
          <div className="w-48 h-48">
            <ChartContainer config={chartConfig} className="min-h-[150px] w-full">
              <PieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie data={chartData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={80} />
              </PieChart>
            </ChartContainer>
          </div>

          <div className="text-center">
            <p className="text-5xl font-bold font-headline">{percentage}%</p>
            <p className="text-muted-foreground">
              You answered {score} out of {questions.length} questions correctly.
            </p>
          </div>

          <div className="flex gap-4">
            <Button onClick={() => window.location.reload()}>
              <Repeat className="w-4 h-4 mr-2" />
              Retry Quiz
            </Button>
            <Link href="/dashboard" passHref>
              <Button variant="outline">
                <Home className="w-4 h-4 mr-2" />
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <h3 className="mb-4 text-xl font-bold font-headline">Review Your Answers</h3>
        <Accordion type="single" collapsible className="w-full">
          {questions.map((question, index) => {
            const userAnswerIndex = userAnswers[index];
            const isCorrect = question.correctAnswerIndex === userAnswerIndex;

            return (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger
                  className={cn(
                    'text-left hover:no-underline',
                    isCorrect ? 'text-green-600' : 'text-red-600'
                  )}
                >
                  <div className="flex items-center gap-3">
                    {isCorrect ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                    <span>Question {index + 1}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 space-y-4 rounded-b-md bg-muted/50">
                  <p className="font-semibold">{question.question}</p>
                  <ul className="space-y-2 text-sm">
                    {question.answers.map((answer, ansIndex) => (
                      <li
                        key={ansIndex}
                        className={cn(
                          'p-2 border rounded-md',
                          ansIndex === question.correctAnswerIndex && 'bg-green-100 border-green-300 dark:bg-green-900/50 dark:border-green-700',
                          ansIndex === userAnswerIndex && !isCorrect && 'bg-red-100 border-red-300 dark:bg-red-900/50 dark:border-red-700'
                        )}
                      >
                        {answer}
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 text-sm border-l-4 rounded-r-md bg-background border-accent">
                    <p className="font-semibold">Rationale:</p>
                    <p className="text-muted-foreground">{question.rationale}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
