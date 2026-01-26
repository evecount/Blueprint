'use client';

import {
  PlayCircle,
  FileText,
  MoreVertical,
  Trash2,
  Smartphone,
  Cpu,
} from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
          <Link href="/resources" passHref>
            <Button size="lg" className="w-full sm:w-auto">
              Explore Quiz Decks
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
              data-ai-hint={heroImage.imageHint}
              priority
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
              {resources.map((resource) => (
                <Card key={resource.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <FileText className="w-8 h-8 text-accent" />
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-8 h-8 -mt-2 -mr-2"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => deleteResource(resource.id)}
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <CardTitle className="pt-4 font-headline">
                      {resource.name}
                    </CardTitle>
                    <CardDescription>
                      Created {format(new Date(resource.createdAt), 'PP')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {resource.questions.length} cards
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={`/quiz/${resource.id}`}
                      passHref
                      className="w-full"
                    >
                      <Button className="w-full">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Start Quiz
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
