'use client';

import { useState } from 'react';
import { DndContext, useDraggable, useDroppable, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, ArrowRight, RefreshCw, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';

// --- Data ---
const mathQuestions = [
  {
    id: 'q1',
    prompt: 'The picture shows 30 tarts shared equally onto 6 plates. Which description below is correct?',
    visual: { type: 'grid', content: '🥧🥧🥧🥧🥧', count: 6 },
    items: [
        { id: 'q1d1', text: '5 groups of 6' },
        { id: 'q1d2', text: '6 groups of 5' },
        { id: 'q1d3', text: '5 + 6' }
    ],
    target: { id: 'q1t1', correctItemId: 'q1d2' }
  },
  {
    id: 'q2',
    prompt: 'Which number sentence matches the picture?',
    visual: { type: 'grid', content: '🍎🍎🍎', count: 4 },
    items: [
        { id: 'q2d1', text: '4 + 3' },
        { id: 'q2d2', text: '4 x 3' },
        { id: 'q2d3', text: '4 - 3' }
    ],
    target: { id: 'q2t1', correctItemId: 'q2d2' }
  },
  {
    id: 'q3',
    prompt: 'There are 2 groups of smiley faces. Which description is correct?',
    visual: { type: 'grid', content: '😊😊😊😊', count: 2 },
    items: [
        { id: 'q3d1', text: '4 groups of 2' },
        { id: 'q3d2', text: '2 + 4' },
        { id: 'q3d3', text: '2 groups of 4' }
    ],
    target: { id: 'q3t1', correctItemId: 'q3d3' }
  }
];


// --- Components ---

function DraggableItem({ id, children, isPlaced }: { id: UniqueIdentifier; children: React.ReactNode; isPlaced: boolean }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    zIndex: 10
  } : { zIndex: isPlaced ? -1 : 1 };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={cn(
        "p-4 text-center border rounded-lg shadow-md cursor-grab bg-background touch-none transition-opacity min-w-[150px]",
        isPlaced && 'opacity-0 pointer-events-none'
      )}
    >
      {children}
    </div>
  );
}

function DropTarget({ id, children, isOccupied }: { id: UniqueIdentifier; children: React.ReactNode; isOccupied: boolean }) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        'p-4 border-2 border-dashed rounded-lg flex items-center justify-center min-h-[80px] w-full max-w-xs text-xl font-semibold transition-colors text-center',
        isOver && 'bg-accent/20 border-accent',
        isOccupied && 'border-solid border-foreground/50'
      )}
    >
      {children}
    </div>
  );
}


// --- Main Page Component ---
export default function MathChallengePage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{[key: string]: UniqueIdentifier | null}>({});
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = mathQuestions[currentQuestionIndex];
  const droppedItemId = answers[currentQuestion.id] || null;

  const isAnswered = droppedItemId !== null;
  const isCorrect = isAnswered && droppedItemId === currentQuestion.target.correctItemId;

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (isAnswered) return;
    if (over && over.id === currentQuestion.target.id) {
        setAnswers(prev => ({...prev, [currentQuestion.id]: active.id}));
    }
  };

  const handleNextQuestion = () => {
    if (isCorrect && !answers[currentQuestion.id + '_scored']) {
        setScore(prev => prev + 1);
        setAnswers(prev => ({...prev, [currentQuestion.id + '_scored']: true}));
    }

    if (currentQuestionIndex < mathQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
    } else {
        setIsFinished(true);
    }
  };

  const handleTryAgain = () => {
      setAnswers(prev => {
          const newAnswers = {...prev};
          delete newAnswers[currentQuestion.id];
          return newAnswers;
      });
  };

  const handleRestartQuiz = () => {
      setCurrentQuestionIndex(0);
      setAnswers({});
      setScore(0);
      setIsFinished(false);
  }

  const getDraggableById = (id: UniqueIdentifier | null) => currentQuestion.items.find(item => item.id === id);
  const droppedItem = getDraggableById(droppedItemId);

  const progressPercentage = ((currentQuestionIndex + (isFinished ? 1 : 0)) / mathQuestions.length) * 100;

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold font-headline">Challenge Complete!</CardTitle>
            <CardDescription>Great job! Here's how you did.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-6xl font-bold text-primary">{score} / {mathQuestions.length}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button onClick={handleRestartQuiz}>
                <RefreshCw className="mr-2" />
                Try Again
              </Button>
              <Button variant="outline" onClick={() => router.push('/')}>
                <Home className="mr-2" />
                Go to Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-8">
       <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Primary 1 Math Challenge</h1>
        <p className="text-muted-foreground">
          An interactive way to learn grouping and multiplication.
        </p>
      </header>

      <div className="space-y-2">
        <div className="flex justify-between text-sm font-medium text-muted-foreground">
            <span>Question {currentQuestionIndex + 1} of {mathQuestions.length}</span>
            <span>Score: {score}</span>
        </div>
        <Progress value={progressPercentage} />
      </div>

      <Card>
        <CardHeader className="text-center">
          <CardTitle>Let's Learn Grouping!</CardTitle>
          <CardDescription>{currentQuestion.prompt}</CardDescription>
        </CardHeader>
        <CardContent>
          <DndContext onDragEnd={handleDragEnd}>
            <div className="flex flex-col items-center gap-8">
              
              <div className="p-6 border rounded-lg bg-muted/50">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {Array.from({ length: currentQuestion.visual.count }).map((_, index) => (
                    <div key={index} className="flex items-center justify-center p-2 text-3xl border rounded-lg shadow-sm bg-background aspect-square">
                      {currentQuestion.visual.content}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative w-full max-w-xs">
                <DropTarget id={currentQuestion.target.id} isOccupied={!!droppedItem}>
                  {droppedItem ? droppedItem.text : "Drag answer here"}
                </DropTarget>
                {isAnswered && (
                    isCorrect 
                    ? <CheckCircle2 className="absolute w-6 h-6 p-1 text-green-500 rounded-full -top-2 -right-2 bg-background" />
                    : <XCircle className="absolute w-6 h-6 p-1 text-red-500 rounded-full -top-2 -right-2 bg-background" />
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 p-4 mt-4 border-2 border-dashed rounded-lg min-h-28 w-full">
                {!isAnswered ? (
                    currentQuestion.items.map(item => (
                        <DraggableItem key={item.id} id={item.id} isPlaced={droppedItemId === item.id}>
                          {item.text}
                        </DraggableItem>
                    ))
                ) : (
                   <div className="flex flex-col items-center gap-2 text-center">
                        {isCorrect ? (
                           <div className="text-green-500">
                             <CheckCircle2 className="w-12 h-12 mx-auto" />
                             <p className="mt-2 font-bold">That's right!</p>
                           </div>
                        ) : (
                            <div className="text-red-500">
                                <XCircle className="w-12 h-12 mx-auto" />
                                <p className="mt-2 font-bold">Not quite. Give it another try!</p>
                            </div>
                        )}
                   </div>
                )}
              </div>
            </div>
          </DndContext>
        </CardContent>
      </Card>

      {isAnswered && (
        <div className="flex justify-end gap-4">
            {!isCorrect && 
              <Button onClick={handleTryAgain} variant="outline">
                  <RefreshCw className="mr-2" />
                  Try Again
              </Button>
            }
            <Button onClick={handleNextQuestion}>
                {currentQuestionIndex === mathQuestions.length - 1 ? 'Finish Challenge' : 'Next Question'}
                <ArrowRight className="ml-2" />
            </Button>
        </div>
      )}
    </div>
  );
}
