'use client';

import {
  PlayCircle,
  MoreVertical,
  Trash2,
  Smartphone,
  Cpu,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppContext } from '@/context/AppProvider';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function DashboardPage() {
  const { resources, deleteResource } = useAppContext();
  const heroImage = PlaceHolderImages.find((img) => img.id === 'dashboard-hero');

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl font-headline">
            Learn Together.
            <br />
            Succeed Together.
          </h1>
          <p className="text-lg text-muted-foreground">
            An open-source, AI-powered study platform for students. Create quizzes from your notes, master any subject, and help others learn—because education should be free.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-primary" />
              <span className="font-medium">Mobile Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" />
              <span className="font-medium">AI Powered</span>
            </div>
          </div>
          <Link href="/resources" passHref className="block pt-4">
            <Button size="lg" className="w-full sm:w-auto">
              Explore Quiz Decks
            </Button>
          </Link>
        </div>
        <div className="relative w-full overflow-hidden rounded-lg shadow-2xl aspect-square">
          {heroImage && (
            <img
              src={heroImage.imageUrl}
              alt={heroImage.description}
              className="absolute inset-0 w-full h-full object-cover"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
      </section>

      {/* Quiz Decks Section */}
      <main>
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight font-headline">
            Available Quiz Decks
          </h2>
          <p className="text-muted-foreground">
            Explore a community-built library of quizzes or contribute your own.
          </p>
        </div>

        <div className="pt-8">
          {resources.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 gap-4 text-center border-2 border-dashed rounded-lg">
              <h3 className="text-xl font-semibold font-headline">
                No Quiz Decks Yet
              </h3>
              <p className="text-muted-foreground">
                Click "Submit a Question" to help build our first quiz deck.
              </p>
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
                            <DropdownMenuItem onClick={(e) => { e.preventDefault(); deleteResource(resource.id); }} className="text-red-500 focus:text-red-500">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
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
      </main>
    </div>
  );
}
