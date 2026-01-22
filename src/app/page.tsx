'use client';

import { PlayCircle, UploadCloud } from 'lucide-react';
import Link from 'next/link';
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
import { useState } from 'react';
import UploadResourceDialog from '@/components/resources/UploadResourceDialog';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useAppContext } from '@/context/AppProvider';

export default function DashboardPage() {
  const [isUploadDialogOpen, setUploadDialogOpen] = useState(false);
  const { resources } = useAppContext();
  const heroImage = PlaceHolderImages.find((img) => img.id === 'dashboard-hero');

  // We will feature the pre-loaded quiz.
  const featuredResource = resources.find((r) => r.id === 'm8-cis-question-bank');

  return (
    <div className="flex flex-col gap-8">
      <UploadResourceDialog open={isUploadDialogOpen} onOpenChange={setUploadDialogOpen} />
      <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight font-headline">Welcome to ReviewMate</h1>
          <p className="text-muted-foreground">An AI-powered proficiency app for your workforce.</p>
        </div>
        <Button onClick={() => setUploadDialogOpen(true)} variant="outline">
          <UploadCloud className="mr-2 h-4 w-4" />
          Create Your Own Quiz
        </Button>
      </header>

      <main>
        {featuredResource ? (
          <Card className="overflow-hidden grid md:grid-cols-2 items-center shadow-lg">
            <div className="p-6 sm:p-8">
              <CardHeader className="p-0">
                <CardTitle className="text-3xl font-headline">{featuredResource.name}</CardTitle>
                <CardDescription className="pt-2 text-base">
                  Ready to test your knowledge? This quiz contains {featuredResource.questions.length} questions to
                  help you prepare for your exam. Start your study session now!
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-0 pt-6">
                <Link href={`/quiz/${featuredResource.id}`}>
                  <Button size="lg" className="shadow-md">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Start Quiz
                  </Button>
                </Link>
              </CardFooter>
            </div>
            {heroImage && (
              <div className="relative w-full h-64 md:h-full min-h-[250px]">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={heroImage.imageHint}
                />
              </div>
            )}
          </Card>
        ) : (
          <Card className="flex flex-col items-center justify-center p-8 text-center">
            <CardHeader>
              <CardTitle className="font-headline">Get Started</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <p className="text-muted-foreground">Upload your first study material to begin generating quizzes.</p>
              <Button onClick={() => setUploadDialogOpen(true)}>
                <UploadCloud className="mr-2 h-4 w-4" />
                Create a Quiz
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
