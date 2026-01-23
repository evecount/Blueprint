'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Loader2 } from 'lucide-react';

import { useAppContext } from '@/context/AppProvider';
import type { QuizQuestion, Resource } from '@/lib/types';
import QuestionCard from './QuestionCard';
import QuizResults from './QuizResults';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

type QuizProgress = {
  userAnswers: number[];
  score: number;
  isFinished: boolean;
};

export default function QuizClientPage({ resourceId }: { resourceId: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { getResourceById, updatePerformance } = useAppContext();
  const { toast } = useToast();

  const [resource, setResource] = useState<Resource | undefined>();
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Derive current question index from URL search param
  const currentQuestionIndex = parseInt(searchParams.get('question') || '0', 10);

  const getStorageKey = useCallback(() => `quiz-progress-${resourceId}`, [resourceId]);

  // Load resource and quiz state from storage
  useEffect(() => {
    const foundResource = getResourceById(resourceId);
    if (foundResource) {
      setResource(foundResource);
      if (foundResource.questions && foundResource.questions.length > 0) {
        setQuestions(foundResource.questions);
        
        // Load progress from session storage
        try {
          const storedProgress = sessionStorage.getItem(getStorageKey());
          if (storedProgress) {
            const progress: QuizProgress = JSON.parse(storedProgress);
            setUserAnswers(progress.userAnswers);
            setScore(progress.score);
            if (progress.isFinished) {
              setIsFinished(true);
            }
          }
        } catch (error) {
          console.error("Failed to load quiz progress from session storage", error);
          // Clear potentially corrupted storage
          sessionStorage.removeItem(getStorageKey());
        }

      } else {
        toast({ title: 'No questions found', description: 'This resource does not have any quiz questions.', variant: 'destructive' });
        router.push('/resources');
      }
      setIsLoading(false);
    } else {
      toast({ title: 'Resource not found', variant: 'destructive' });
      router.push('/resources');
    }
  }, [resourceId, getResourceById, router, toast, getStorageKey]);

  const saveProgress = useCallback((progress: QuizProgress) => {
    try {
      sessionStorage.setItem(getStorageKey(), JSON.stringify(progress));
    } catch (error) {
      console.error("Failed to save quiz progress to session storage", error);
    }
  }, [getStorageKey]);

  const handleNextQuestion = (selectedAnswer: number, isCorrect: boolean) => {
    // This handles re-answering questions if the user navigates back
    const newAnswers = userAnswers.slice(0, currentQuestionIndex);
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newAnswers);

    // Recalculate score from the new answer set
    let updatedScore = 0;
    newAnswers.forEach((answer, index) => {
        if (questions[index]?.correctAnswerIndex === answer) {
            updatedScore++;
        }
    });
    setScore(updatedScore);
    
    const progress: QuizProgress = { userAnswers: newAnswers, score: updatedScore, isFinished: false };

    if (currentQuestionIndex < questions.length - 1) {
      saveProgress(progress);
      router.push(`/quiz/${resourceId}?question=${currentQuestionIndex + 1}`, { scroll: false });
    } else {
      finishQuiz(updatedScore, newAnswers);
    }
  };

  const finishQuiz = (finalScore: number, finalAnswers: number[]) => {
    if (!resource) return;
    updatePerformance(resource.name, finalScore, questions.length);
    setIsFinished(true);
    saveProgress({ userAnswers: finalAnswers, score: finalScore, isFinished: true });
  };
  
  const handleRestart = () => {
    sessionStorage.removeItem(getStorageKey());
    setUserAnswers([]);
    setScore(0);
    setIsFinished(false);
    router.push(`/quiz/${resourceId}?question=0`, { scroll: false });
  }

  if (isLoading || !resource) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (isFinished) {
    return <QuizResults questions={questions} userAnswers={userAnswers} score={score} resourceName={resource.name} onRestart={handleRestart} />;
  }
  
  // Guard against out-of-bounds-access
  if (currentQuestionIndex >= questions.length && questions.length > 0) {
    return <QuizResults questions={questions} userAnswers={userAnswers} score={score} resourceName={resource.name} onRestart={handleRestart} />;
  }

  const progressPercentage = ((currentQuestionIndex) / questions.length) * 100;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <Button variant="outline" size="icon" onClick={() => router.push('/resources')}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div className="flex-1 space-y-1">
          <h1 className="text-xl font-bold truncate font-headline">{resource.name}</h1>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
             {currentQuestionIndex > 0 && (
              <span className="font-semibold">Score: {score} / {currentQuestionIndex}</span>
            )}
          </div>
        </div>
      </div>
      <Progress value={progressPercentage} className="mb-8" />
      
      {currentQuestion ? (
        <QuestionCard
          key={currentQuestionIndex}
          question={currentQuestion}
          onAnswer={handleNextQuestion}
        />
      ) : (
         <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
            <h2 className="text-2xl font-bold font-headline">Quiz Ready!</h2>
         </div>
      )}
    </div>
  );
}
