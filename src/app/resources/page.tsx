'use client';

import { MoreVertical, Trash2, Gift, PlayCircle } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppContext } from '@/context/AppProvider';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export default function ResourcesPage() {
  const { resources, deleteResource } = useAppContext();

  return (
    <div className="flex flex-col gap-8">
      <header className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight font-headline">My Quiz Decks</h1>
          <p className="text-muted-foreground">Manage your decks and challenge your friends.</p>
        </div>
        <Link href="/contribute" passHref>
          <Button>
            <Gift className="mr-2 h-4 w-4" />
            Submit a Question
          </Button>
        </Link>
      </header>

      {resources.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 gap-4 text-center border-2 border-dashed rounded-lg">
          <h3 className="text-xl font-semibold font-headline">No Decks Found</h3>
          <p className="text-muted-foreground">Click "Submit a Question" to help build our first quiz deck.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {resources.map((resource) => {
            const resourceImage = PlaceHolderImages.find((img) => img.id === resource.id);
            return (
               <Card key={resource.id} className="relative overflow-hidden rounded-lg shadow-lg group aspect-square">
                  <Link href={`/quiz/${resource.id}`} passHref className="absolute inset-0 z-0">
                    <span className="sr-only">Start quiz for {resource.name}</span>
                  </Link>
                  
                  {resourceImage && (
                    <img
                      src={resourceImage.imageUrl}
                      alt={resourceImage.description}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={resourceImage.imageHint}
                    />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-4 text-white">
                    {/* Top section with title and dropdown */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold font-headline">{resource.name}</h3>
                        <p className="text-sm text-white/80">{resource.questions.length} cards</p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="relative z-20 text-white bg-black/20 hover:bg-black/50 hover:text-white h-8 w-8 -mr-2 -mt-2">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <DropdownMenuItem
                                onSelect={(e) => e.preventDefault()}
                                className="text-red-500 focus:text-red-500"
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. This will permanently delete the deck "{resource.name}".
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => deleteResource(resource.id)}
                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* Bottom section with play icon */}
                    <div className="self-end">
                        <PlayCircle className="w-10 h-10 opacity-80" />
                    </div>
                  </div>
                </Card>
            )
          })}
        </div>
      )}
    </div>
  );
}
