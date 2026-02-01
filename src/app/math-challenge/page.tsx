'use client';

import { useState } from 'react';
import { DndContext, useDraggable, useDroppable, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, ArrowRight, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    prompt: 'Which number sentence matches the groups of items shown?',
    visual: { type: 'grid', content: '⭐⭐⭐', count: 4 },
    items: [
        { id: 'q2d1', text: '4 × 3' },
        { id: 'q2d2', text: '3 × 4' },
        { id: 'q2d3', text: '4 + 3' }
    ],
    target: { id: 'q2t1', correctItemId: 'q2d1' }
  },
   {
    id: 'q3',
    prompt: '10 oranges are packed equally into 5 bags. Which description matches how the oranges are packed?',
    visual: { type: 'grid', content: '🍊🍊', count: 5 },
    items: [
        { id: 'q3d1', text: '5 groups of 2' },
        { id: 'q3d2', text: '2 groups of 5' },
        { id: 'q3d3', text: '5 + 2' }
    ],
    target: { id: 'q3t1', correctItemId: 'q3d1' }
  },
  {
    id: 'q4',
    prompt: 'Which number sentence correctly describes the picture?',
    visual: { type: 'grid', content: '😊😊', count: 3 },
    items: [
        { id: 'q4d1', text: '3 × 2' },
        { id: 'q4d2', text: '2 × 3' },
        { id: 'q4d3', text: '2 + 3' }
    ],
    target: { id: 'q4t1', correctItemId: 'q4d1' }
  },
  {
    id: 'q5',
    prompt: 'What is the time shown on the clock? The short hand points to the 3 and the long hand points to the 1.',
    visual: { type: 'grid', content: '🕒', count: 1 },
    items: [
        { id: 'q5d1', text: '1:03' },
        { id: 'q5d2', text: '1:15' },
        { id: 'q5d3', text: '3:01' },
        { id: 'q5d4', text: '3:05' }
    ],
    target: { id: 'q5t1', correctItemId: 'q5d4' }
  },
  {
    id: 'q6',
    prompt: 'Devi played for half an hour. She stopped playing at 12 noon. What time did she start playing?',
    visual: { type: 'grid', content: '🕛', count: 1 },
    items: [
        { id: 'q6d1', text: '11:30 am' },
        { id: 'q6d2', text: '11:30 pm' },
        { id: 'q6d3', text: '12:30 am' },
        { id: 'q6d4', text: '12:30 pm' }
    ],
    target: { id: 'q6t1', correctItemId: 'q6d1' }
  },
  {
    id: 'q7',
    prompt: 'Sue has 18 stamps. She puts them into 3 equal groups. How many stamps are in each group?',
    visual: { type: 'grid', content: '🖼️', count: 18 },
    items: [
        { id: 'q7d1', text: '3' },
        { id: 'q7d2', text: '6' },
        { id: 'q7d3', text: '9' }
    ],
    target: { id: 'q7t1', correctItemId: 'q7d2' }
  },
  {
    id: 'q8',
    prompt: 'How many groups of crayons are there?',
    visual: { type: 'grid', content: '🖍️🖍️🖍️🖍️', count: 8 },
    items: [
        { id: 'q8d1', text: '4' },
        { id: 'q8d2', text: '8' },
        { id: 'q8d3', text: '32' }
    ],
    target: { id: 'q8t1', correctItemId: 'q8d2' }
  },
  {
    id: 'q9',
    prompt: 'How many crayons are in each group?',
    visual: { type: 'grid', content: '🖍️🖍️🖍️🖍️', count: 8 },
    items: [
        { id: 'q9d1', text: '4' },
        { id: 'q9d2', text: '8' },
        { id: 'q9d3', text: '32' }
    ],
    target: { id: 'q9t1', correctItemId: 'q9d1' }
  },
  {
    id: 'q10',
    prompt: 'There are 8 groups of 4 crayons. How many crayons are there altogether?',
    visual: { type: 'grid', content: '🖍️🖍️🖍️🖍️', count: 8 },
    items: [
        { id: 'q10d1', text: '12' },
        { id: 'q10d2', text: '24' },
        { id: 'q10d3', text: '32' }
    ],
    target: { id: 'q10t1', correctItemId: 'q10d3' }
  },
  {
    id: 'q11',
    prompt: 'John had his breakfast at 7:10 am. Where should the minute hand point to show the time?',
    visual: { type: 'grid', content: '🕖', count: 1 },
    items: [
        { id: 'q11d1', text: 'To the number 10' },
        { id: 'q11d2', text: 'To the number 2' },
        { id: 'q11d3', text: 'To the number 7' }
    ],
    target: { id: 'q11t1', correctItemId: 'q11d2' }
  },
  {
    id: 'q12',
    prompt: 'Which equation has the same answer as 3 + 3 + 3?',
    visual: { type: 'grid', content: '❤️', count: 9 },
    items: [
        { id: 'q12d1', text: '2 + 2' },
        { id: 'q12d2', text: '3 x 3' },
        { id: 'q12d3', text: '6 x 2' }
    ],
    target: { id: 'q12t1', correctItemId: 'q12d2' }
  },
  {
    id: 'q13',
    prompt: 'Jayden baked 15 cupcakes. He put 3 cupcakes into one box. How many boxes would he need?',
    visual: { type: 'grid', content: '🧁', count: 15 },
    items: [
        { id: 'q13d1', text: '3' },
        { id: 'q13d2', text: '5' },
        { id: 'q13d3', text: '15' }
    ],
    target: { id: 'q13t1', correctItemId: 'q13d2' }
  },
  {
    id: 'q14',
    prompt: 'Which equation has the same answer as 3 + 3 + 3?',
    visual: { type: 'grid', content: '❤️', count: 9 },
    items: [
        { id: 'q14d1', text: '2 + 2' },
        { id: 'q14d2', text: '3 x 3' },
        { id: 'q14d3', text: '6 x 2' }
    ],
    target: { id: 'q14t1', correctItemId: 'q14d2' }
  },
  {
    id: 'q15',
    prompt: 'Drag the matching description for the equation: 2 + 2 + 2',
    items: [
        { id: 'q15d1', text: '2 groups of 2' },
        { id: 'q15d2', text: '6 + 6 + 6 + 6' },
        { id: 'q15d3', text: '3 twos' }
    ],
    target: { id: 'q15t1', correctItemId: 'q15d3' }
  },
  {
    id: 'q16',
    prompt: 'Drag the matching description for the equation: 4 x 6',
    items: [
        { id: 'q16d1', text: '2 groups of 2' },
        { id: 'q16d2', text: '6 + 6 + 6 + 6' },
        { id: 'q16d3', text: '3 twos' }
    ],
    target: { id: 'q16t1', correctItemId: 'q16d2' }
  },
  {
    id: 'q17',
    prompt: 'Read the TV schedule below. Which show lasts for 1 hour?\n\n7:30am Wildlife\n8:15am The Flash\n9:45am Yum Yum\n10:30am Hop Over\n11:30am Ollie and Friends',
    items: [
        { id: 'q17d1', text: 'Wildlife' },
        { id: 'q17d2', text: 'The Flash' },
        { id: 'q17d3', text: 'Hop Over' }
    ],
    target: { id: 'q17t1', correctItemId: 'q17d3' }
  },
  {
    id: 'q18',
    prompt: 'Read the TV schedule below. If Siti turns on the TV at 8:00 am, what show is she watching?\n\n7:00am News\n7:30am Wildlife\n8:15am The Flash',
    items: [
        { id: 'q18d1', text: 'News' },
        { id: 'q18d2', text: 'Wildlife' },
        { id: 'q18d3', text: 'The Flash' }
    ],
    target: { id: 'q18t1', correctItemId: 'q18d2' }
  },
  {
    id: 'q19',
    prompt: 'Kim bought 2 boxes of apples (10 apples/box).\nLingli bought 4 bags of apples (5 apples/bag).\n\nTrue or False: "Lingli bought more apples than Kim."',
    items: [
        { id: 'q19d1', text: 'True' },
        { id: 'q19d2', text: 'False' }
    ],
    target: { id: 'q19t1', correctItemId: 'q19d2' }
  },
  {
    id: 'q20',
    prompt: 'Kim has 20 apples in total.\n\nTrue or False: "Kim can pack all her apples equally into bags of 5."',
    items: [
        { id: 'q20d1', text: 'True' },
        { id: 'q20d2', text: 'False' }
    ],
    target: { id: 'q20t1', correctItemId: 'q20d1' }
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

   const handlePreviousQuestion = () => {
      if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex(prev => prev - 1);
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

  const progressPercentage = (currentQuestionIndex / mathQuestions.length) * 100;

  if (isFinished) {
    return (
      <div className="flex items-center justify-center h-full max-w-2xl mx-auto text-center">
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
    <div className="flex flex-col max-w-5xl mx-auto h-[calc(100vh-8rem)]">
      <header className="px-4 pt-4">
        <h1 className="text-2xl font-bold tracking-tight text-center font-headline">Primary 1 Math Challenge</h1>
      </header>

      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <DndContext onDragEnd={handleDragEnd}>
            <div className="w-full space-y-6 text-center">
                <p className="text-xl whitespace-pre-wrap">{currentQuestion.prompt}</p>

                {currentQuestion.visual && (
                  <div className="inline-block p-6 border rounded-lg bg-muted/50">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9">
                      {Array.from({ length: currentQuestion.visual.count }).map((_, index) => (
                          <div key={index} className="flex items-center justify-center p-2 text-3xl border rounded-lg shadow-sm bg-background aspect-square">
                          {currentQuestion.visual.content}
                          </div>
                      ))}
                      </div>
                  </div>
                )}

                <div className="relative w-full max-w-xs mx-auto">
                    <DropTarget id={currentQuestion.target.id} isOccupied={!!droppedItem}>
                    {droppedItem ? droppedItem.text : "Drag answer here"}
                    </DropTarget>
                    {isAnswered && (
                        isCorrect 
                        ? <CheckCircle2 className="absolute w-6 h-6 p-1 text-green-500 rounded-full -top-2 -right-2 bg-background" />
                        : <XCircle className="absolute w-6 h-6 p-1 text-red-500 rounded-full -top-2 -right-2 bg-background" />
                    )}
                </div>

                <div className="flex flex-wrap items-center justify-center w-full gap-4 p-4 mt-4 border-2 border-dashed rounded-lg min-h-[110px]">
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
      </div>
      
      <div className="px-4 pb-4 mt-auto">
          <div className="mb-4 space-y-2">
              <div className="flex justify-between text-sm font-medium text-muted-foreground">
                  <span>Question {currentQuestionIndex + 1} of {mathQuestions.length}</span>
                  <span>Score: {score}</span>
              </div>
              <Progress value={progressPercentage} />
          </div>
          <div className="flex items-center justify-between">
              <Button variant="outline" size="lg" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                  <ArrowLeft className="w-8 h-8" />
              </Button>
              
              {!isCorrect && isAnswered && (
                   <Button onClick={handleTryAgain}>
                        <RefreshCw className="mr-2" />
                        Try Again
                    </Button>
              )}

              <Button size="lg" onClick={handleNextQuestion} disabled={!isCorrect}>
                  <ArrowRight className="w-8 h-8" />
              </Button>
          </div>
      </div>
    </div>
  );
}
