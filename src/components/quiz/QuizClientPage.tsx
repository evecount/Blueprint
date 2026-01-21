'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Loader2 } from 'lucide-react';

import { useAppContext } from '@/context/AppProvider';
import type { QuizQuestion, Resource } from '@/lib/types';
import QuestionCard from './QuestionCard';
import QuizResults from './QuizResults';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

export default function QuizClientPage({ resourceId }: { resourceId: string }) {
  const router = useRouter();
  const { getResourceById, updatePerformance } = useAppContext();
  const { toast } = useToast();

  const [resource, setResource] = useState<Resource | undefined>();
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundResource = getResourceById(resourceId);
    if (foundResource) {
      setResource(foundResource);
      if (foundResource.questions && foundResource.questions.length > 0) {
        setQuestions(foundResource.questions);
      } else {
        toast({ title: 'No questions found', description: 'This resource does not have any quiz questions.', variant: 'destructive' });
        router.push('/resources');
      }
      setIsLoading(false);
    } else {
      toast({ title: 'Resource not found', variant: 'destructive' });
      router.push('/resources');
    }
  }, [resourceId, getResourceById, router, toast]);
  

  const handleNextQuestion = (selectedAnswer: number, isCorrect: boolean) => {
    setUserAnswers([...userAnswers, selectedAnswer]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    if (!resource) return;
    const score = questions.reduce((acc, question, index) => {
      return question.correctAnswerIndex === userAnswers[index] ? acc + 1 : acc;
    }, 0);
    updatePerformance(resource.name, score, questions.length);
    setIsFinished(true);
  };
  
  const score = useMemo(() => {
    return questions.reduce((acc, question, index) => {
      const userAnswer = userAnswers[index];
      if (userAnswer !== undefined && userAnswer === question.correctAnswerIndex) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }, [userAnswers, questions]);

  if (isLoading || !resource) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (isFinished) {
    return <QuizResults questions={questions} userAnswers={userAnswers} score={score} resourceName={resource.name} />;
  }

  const progress = (currentQuestionIndex / questions.length) * 100;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div className="flex-1 space-y-1">
          <h1 className="text-xl font-bold truncate font-headline">{resource.name}</h1>
          <p className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>
      </div>
      <Progress value={progress} className="mb-8" />
      
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
