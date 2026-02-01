'use client';

import { useState } from 'react';
import { DndContext, useDraggable, useDroppable, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Draggable Item Component
function DraggableItem({ id, children, isPlaced }: { id: UniqueIdentifier; children: React.ReactNode; isPlaced: boolean }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={cn(
        "p-4 m-2 text-2xl font-bold border rounded-lg shadow-md cursor-grab bg-background touch-none z-10 transition-opacity",
        isPlaced && 'opacity-0 pointer-events-none'
      )}
    >
      {children}
    </div>
  );
}

// Droppable Zone Component
function DropTarget({ id, children }: { id: UniqueIdentifier; children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        'p-4 border-2 border-dashed rounded-lg flex items-center justify-center min-h-[80px] w-[120px] text-3xl font-bold transition-colors',
        isOver && 'bg-accent/20 border-accent'
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
    prompt: 'Count the fruit and place the correct number in each box.',
    items: [{ id: 'd1', text: '3' }, { id: 'd2', text: '5' }],
    targets: [
      { id: 't1', emoji: '🍎🍎🍎', correctItemId: 'd1' },
      { id: 't2', emoji: '🍊🍊🍊🍊🍊', correctItemId: 'd2' }
    ]
  };

  // State to track which droppable holds which draggable
  const [droppedIn, setDroppedIn] = useState<Record<UniqueIdentifier, UniqueIdentifier | null>>({ t1: null, t2: null });

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    const draggableId = active.id;

    setDroppedIn(prev => {
      const newDroppedIn = { ...prev };
      // Find and clear any previous location of this draggable
      const oldTarget = Object.keys(newDroppedIn).find(key => newDroppedIn[key] === draggableId);
      if (oldTarget) {
        newDroppedIn[oldTarget] = null;
      }
      // If dropped over a new target, place it there
      if (over) {
        // If the new target is already occupied, swap items
        const occupant = newDroppedIn[over.id];
        if (occupant) {
            newDroppedIn[oldTarget || 'pool'] = occupant;
        }
        newDroppedIn[over.id] = draggableId;
      }
      return newDroppedIn;
    });
  };
  
  const isComplete = question.targets.every(target => droppedIn[target.id] === target.correctItemId);

  const getDraggableById = (id: UniqueIdentifier | null) => question.items.find(item => item.id === id);

  return (
    <div className="space-y-8">
       <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Primary 1 Math Challenge</h1>
        <p className="text-muted-foreground">
          Drag and drop the numbers to match the pictures!
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Question 1</CardTitle>
          <CardDescription>{question.prompt}</CardDescription>
        </CardHeader>
        <CardContent>
          <DndContext onDragEnd={handleDragEnd}>
            <div className="flex flex-col items-center gap-12">
              {/* Drop Targets */}
              <div className="flex flex-wrap items-end justify-center gap-8">
                {question.targets.map(target => {
                  const droppedItemId = droppedIn[target.id];
                  const isCorrect = droppedItemId && target.correctItemId === droppedItemId;
                  return (
                    <div key={target.id} className="relative flex flex-col items-center gap-2">
                       <p className="text-4xl h-12">{target.emoji}</p>
                       <DropTarget id={target.id}>
                         {droppedItemId ? getDraggableById(droppedItemId)?.text : "?"}
                       </DropTarget>
                       {droppedItemId && (
                           isCorrect 
                           ? <CheckCircle2 className="absolute -top-2 -right-2 text-green-500 bg-background rounded-full" />
                           : <XCircle className="absolute -top-2 -right-2 text-red-500 bg-background rounded-full" />
                       )}
                    </div>
                  );
                })}
              </div>

              {/* Draggable Items */}
              <div className="flex flex-wrap items-center justify-center gap-4 p-4 border-2 border-dashed rounded-lg min-h-28 min-w-80">
                {question.items.map(item => {
                  const isPlaced = Object.values(droppedIn).includes(item.id);
                  return (
                    <DraggableItem key={item.id} id={item.id} isPlaced={isPlaced}>
                      {item.text}
                    </DraggableItem>
                  )
                })}
                {isComplete && (
                   <div className="flex flex-col items-center gap-2 text-center text-green-500">
                      <CheckCircle2 className="w-12 h-12" />
                      <p className="font-bold">Well done!</p>
                   </div>
                )}
              </div>
            </div>
          </DndContext>
        </CardContent>
      </Card>

      {isComplete && (
        <div className="flex justify-end">
            <Button disabled>
                Next Question <ArrowRight className="ml-2" />
            </Button>
        </div>
      )}
    </div>
  );
}
