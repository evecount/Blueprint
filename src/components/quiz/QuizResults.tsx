'use client';

import { useState, useEffect } from 'react';
import { Check, Home, Repeat, TrendingUp, X, Gift, Loader2, Award } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { QuizQuestion } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  Pie,
  PieChart,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface QuizResultsProps {
  questions: QuizQuestion[];
  userAnswers: number[];
  score: number;
  resourceName: string;
  onRestart: () => void;
}

const chartConfig = {
  correct: { label: 'Correct', color: 'hsl(var(--chart-1))' },
  incorrect: { label: 'Incorrect', color: 'hsl(var(--destructive))' },
} satisfies ChartConfig;

const PRIZES = [
    "An extra 30 minutes of screen time!",
    "Choose your favorite dinner this week!",
    "One extra bedtime story tonight!",
    "A special trip to the playground!",
    "You earned a small treat (like an ice cream)!",
];

export default function QuizResults({ questions, userAnswers, score, resourceName, onRestart }: QuizResultsProps) {
  const router = useRouter();
  const percentage = Math.round((score / questions.length) * 100);
  const [showOnlyIncorrect, setShowOnlyIncorrect] = useState(false);

  const [isSpinning, setIsSpinning] = useState(false);
  const [prize, setPrize] = useState<string | null>(null);
  const [spinningPrize, setSpinningPrize] = useState<string | null>(PRIZES[0]);
  const [hasSpun, setHasSpun] = useState(false);

  const chartData = [
    { name: 'correct', value: score, fill: 'var(--color-correct)' },
    { name: 'incorrect', value: questions.length - score, fill: 'var(--color-incorrect)' },
  ];

  const handleSpin = () => {
    if (hasSpun) return;
    setIsSpinning(true);
    let spinCount = 0;
    const interval = setInterval(() => {
        setSpinningPrize(PRIZES[spinCount % PRIZES.length]);
        spinCount++;
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        const finalPrize = PRIZES[Math.floor(Math.random() * PRIZES.length)];
        setPrize(finalPrize);
        setHasSpun(true);
        setIsSpinning(false);
    }, 3000); // Spin for 3 seconds
  }

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
          
          {/* Prize Spinner */}
          <div className="w-full max-w-md p-6 text-center border-2 border-dashed rounded-lg">
            {!hasSpun ? (
                <>
                    <h3 className="text-xl font-semibold font-headline">Great work!</h3>
                    <p className="mb-4 text-muted-foreground">Spin the wheel to see what you've earned!</p>
                    <Button onClick={handleSpin} disabled={isSpinning}>
                        {isSpinning ? <Loader2 className="mr-2 animate-spin" /> : <Gift className="mr-2" />}
                        {isSpinning ? 'Spinning...' : 'Spin for a Prize!'}
                    </Button>
                     {isSpinning && <p className="text-2xl font-bold text-primary font-headline py-4 min-h-[72px]">{spinningPrize}</p>}
                </>
            ) : (
                <>
                    <h3 className="text-lg font-semibold text-muted-foreground">You won:</h3>
                    <p className="text-2xl font-bold text-primary font-headline py-4 min-h-[72px]">{prize}</p>
                    <p className="text-sm text-muted-foreground">Show this to your parents!</p>
                </>
            )}
        </div>

        {/* CTA for schools */}
         <Alert className="w-full max-w-md">
            <Award className="w-4 h-4" />
            <AlertTitle className="font-semibold">Teachers & Schools</AlertTitle>
            <AlertDescription>
                Want to create custom badges and rewards for your class? 
                <Link href="/auth/register" className="ml-1 font-bold underline text-primary hover:text-primary/80">
                    Register for free!
                </Link>
            </AlertDescription>
        </Alert>


          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={onRestart}>
              <Repeat className="w-4 h-4 mr-2" />
              Retry Quiz
            </Button>
            <Button variant="outline" onClick={() => router.push('/')}>
              <Home className="w-4 h-4 mr-2" />
              Go to Dashboard
            </Button>
            <Link href="/performance" passHref>
              <Button variant="outline">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Performance
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold font-headline">Review Your Answers</h3>
          <div className="flex items-center space-x-2">
            <Switch
              id="show-incorrect"
              checked={showOnlyIncorrect}
              onCheckedChange={setShowOnlyIncorrect}
            />
            <Label htmlFor="show-incorrect">Show incorrect only</Label>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {questions.map((question, index) => {
            const userAnswerIndex = userAnswers[index];
            const isCorrect = question.correctAnswerIndex === userAnswerIndex;

            if (showOnlyIncorrect && isCorrect) {
              return null;
            }

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
