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
import { adaptiveQuizGeneration } from '@/ai/flows/adaptive-quiz-generation';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const ADAPTIVE_QUIZ_LENGTH = 10;

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
  const [topic, setTopic] = useState('');
  const [isTopicModalOpen, setIsTopicModalOpen] = useState(false);

  useEffect(() => {
    const foundResource = getResourceById(resourceId);
    if (foundResource) {
      setResource(foundResource);
      if (foundResource.type === 'Mock Exam' && foundResource.questions) {
        setQuestions(foundResource.questions);
        setIsLoading(false);
      } else {
        setIsTopicModalOpen(true);
      }
    } else {
      router.push('/resources');
    }
  }, [resourceId, getResourceById, router]);
  
  const startAdaptiveQuiz = async () => {
    if (!resource || !topic) return;
    setIsTopicModalOpen(false);
    setIsLoading(true);

    try {
      const firstQuestion = await adaptiveQuizGeneration({
        pdfDataUri: resource.pdfDataUri,
        topic: topic,
        difficulty: 'medium',
      });
      setQuestions([firstQuestion as QuizQuestion]);
    } catch (e) {
      toast({ title: 'Error generating quiz', description: 'Could not generate the first question.', variant: 'destructive' });
      router.push('/resources');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextQuestion = async (selectedAnswer: number, isCorrect: boolean) => {
    setUserAnswers([...userAnswers, selectedAnswer]);

    if (resource?.type === 'Textbook') {
      if (currentQuestionIndex < ADAPTIVE_QUIZ_LENGTH - 1) {
        setIsLoading(true);
        try {
          const nextQuestion = await adaptiveQuizGeneration({
            pdfDataUri: resource.pdfDataUri,
            topic: topic,
            difficulty: 'medium', // Let the flow decide the next difficulty
            correctlyAnswered: isCorrect,
          });
          setQuestions(prev => [...prev, nextQuestion as QuizQuestion]);
          setCurrentQuestionIndex(prev => prev + 1);
        } catch(e) {
          toast({ title: 'Error generating next question', variant: 'destructive' });
          // End quiz if generation fails
          finishQuiz();
        } finally {
          setIsLoading(false);
        }
      } else {
        finishQuiz();
      }
    } else {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        finishQuiz();
      }
    }
  };

  const finishQuiz = () => {
    const score = questions.reduce((acc, question, index) => {
      return question.correctAnswerIndex === userAnswers[index] ? acc + 1 : acc;
    }, 0);
    updatePerformance(resource?.name || 'Unnamed Quiz', score, questions.length);
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

  if (!resource) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (isFinished) {
    return <QuizResults questions={questions} userAnswers={userAnswers} score={score} resourceName={resource.name} />;
  }

  const progress = (currentQuestionIndex / (resource.type === 'Textbook' ? ADAPTIVE_QUIZ_LENGTH : questions.length)) * 100;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <Dialog open={isTopicModalOpen} onOpenChange={() => { if (!topic) router.back() }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-headline">Enter Quiz Topic</DialogTitle>
          </DialogHeader>
          <Input 
            placeholder="e.g., Photosynthesis, The Cold War"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && topic && startAdaptiveQuiz()}
          />
          <DialogFooter>
            <Button onClick={startAdaptiveQuiz} disabled={!topic || isLoading}>
              {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin"/> : null}
              Start Quiz
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <div className="flex items-center gap-4 mb-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div className="flex-1 space-y-1">
          <h1 className="text-xl font-bold truncate font-headline">{resource.name}</h1>
          <p className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1} of {resource.type === 'Textbook' ? ADAPTIVE_QUIZ_LENGTH : questions.length}
          </p>
        </div>
      </div>
      <Progress value={progress} className="mb-8" />
      
      {isLoading && !currentQuestion ? (
        <div className="flex flex-col items-center justify-center h-64 gap-4">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
          <p className="text-lg text-muted-foreground">Generating your quiz...</p>
        </div>
      ) : currentQuestion ? (
        <QuestionCard
          key={currentQuestionIndex}
          question={currentQuestion}
          onAnswer={handleNextQuestion}
          isSubmittingNext={isLoading}
        />
      ) : (
         <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
            <h2 className="text-2xl font-bold font-headline">Quiz Ready!</h2>
            <p className="text-muted-foreground">This resource doesn't have pre-made questions. An adaptive quiz will be generated for you.</p>
        </div>
      )}
    </div>
  );
}
