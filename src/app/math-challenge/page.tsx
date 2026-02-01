'use client';

import { useState } from 'react';
import { DndContext, useDraggable, useDroppable, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

// Draggable Item Component (can be wider for text)
function DraggableItem({ id, children, isPlaced }: { id: UniqueIdentifier; children: React.ReactNode; isPlaced: boolean }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    zIndex: 10 // Ensure dragged item is on top
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

// Droppable Zone Component
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

// The main page component
export default function MathChallengePage() {
  const question = {
    id: 'q1',
    prompt: 'The picture shows 30 tarts shared equally onto 6 plates. Which description below is correct?',
    visual: '🥧🥧🥧🥧🥧',
    items: [
        { id: 'd1', text: '5 groups of 6' },
        { id: 'd2', text: '6 groups of 5' },
        { id: 'd3', text: '5 + 6' }
    ],
    target: { id: 't1', correctItemId: 'd2' }
  };

  const [droppedItemId, setDroppedItemId] = useState<UniqueIdentifier | null>(null);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    
    // Check if dropped over the target zone
    if (over && over.id === question.target.id) {
        setDroppedItemId(active.id);
    } else {
        // If an item was dragged from the target and not dropped on another valid target, reset its position in this simple case
        if (droppedItemId === active.id) {
            setDroppedItemId(null);
        }
    }
  };
  
  const isAnswered = droppedItemId !== null;
  const isCorrect = isAnswered && droppedItemId === question.target.correctItemId;

  const getDraggableById = (id: UniqueIdentifier | null) => question.items.find(item => item.id === id);
  const droppedItem = getDraggableById(droppedItemId);

  const handleReset = () => {
      setDroppedItemId(null);
  }

  return (
    <div className="space-y-8">
       <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Primary 1 Math Challenge</h1>
        <p className="text-muted-foreground">
          An interactive way to learn grouping.
        </p>
      </header>

      <Card>
        <CardHeader className="text-center">
          <CardTitle>Let's Learn Grouping!</CardTitle>
          <CardDescription>{question.prompt}</CardDescription>
        </CardHeader>
        <CardContent>
          <DndContext onDragEnd={handleDragEnd}>
            <div className="flex flex-col items-center gap-8">
              
              {/* Visual Prompt */}
              <div className="p-6 border rounded-lg bg-muted/50">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="flex items-center justify-center p-2 text-3xl border rounded-lg shadow-sm bg-background aspect-square">
                      {question.visual}
                    </div>
                  ))}
                </div>
              </div>

              {/* Drop Target */}
              <div className="relative w-full max-w-xs">
                <DropTarget id={question.target.id} isOccupied={!!droppedItem}>
                  {droppedItem ? droppedItem.text : "Drag answer here"}
                </DropTarget>
                {isAnswered && (
                    isCorrect 
                    ? <CheckCircle2 className="absolute w-6 h-6 p-1 text-green-500 rounded-full -top-2 -right-2 bg-background" />
                    : <XCircle className="absolute w-6 h-6 p-1 text-red-500 rounded-full -top-2 -right-2 bg-background" />
                )}
              </div>

              {/* Draggable Items Pool */}
              <div className="flex flex-wrap items-center justify-center gap-4 p-4 mt-4 border-2 border-dashed rounded-lg min-h-28 w-full">
                {!isAnswered ? (
                    question.items.map(item => {
                        const isPlaced = droppedItemId === item.id;
                        return (
                            <DraggableItem key={item.id} id={item.id} isPlaced={isPlaced}>
                            {item.text}
                            </DraggableItem>
                        )
                    })
                ) : (
                   <div className="flex flex-col items-center gap-2 text-center">
                        {isCorrect ? (
                           <div className="text-green-500">
                             <CheckCircle2 className="w-12 h-12 mx-auto" />
                             <p className="mt-2 font-bold">That's right! It's 6 groups of 5.</p>
                           </div>
                        ) : (
                            <div className="text-red-500">
                                <XCircle className="w-12 h-12 mx-auto" />
                                <p className="mt-2 font-bold">Not quite. Give it another try!</p>
                            </div>
                        )}
                        {!isCorrect && 
                            <Button onClick={handleReset} variant="outline" className="mt-4">
                                <RefreshCw className="mr-2" />
                                Try Again
                            </Button>
                        }
                   </div>
                )}
              </div>
            </div>
          </DndContext>
        </CardContent>
      </Card>

      {isCorrect && (
        <div className="flex justify-end">
            <Button disabled>
                Next Question <ArrowRight className="ml-2" />
            </Button>
        </div>
      )}
    </div>
  );
}
