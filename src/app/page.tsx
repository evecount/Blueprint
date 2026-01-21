'use client';

import { BarChart, UploadCloud } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PerformanceTracker from '@/components/dashboard/PerformanceTracker';
import { useMemo, useState } from 'react';
import UploadResourceDialog from '@/components/resources/UploadResourceDialog';
import { useAppContext } from '@/context/AppProvider';

export default function DashboardPage() {
  const [isUploadDialogOpen, setUploadDialogOpen] = useState(false);
  const { resources } = useAppContext();

  const hasResources = useMemo(() => resources.length > 0, [resources]);

  return (
    <div className="flex flex-col gap-8">
      <UploadResourceDialog open={isUploadDialogOpen} onOpenChange={setUploadDialogOpen} />
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Welcome to StudyBuddy AI</h1>
        <p className="text-muted-foreground">
          Your personal AI-powered study partner. Upload materials, take quizzes, and track your progress.
        </p>
      </header>

      <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <BarChart className="w-5 h-5" />
              Performance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceTracker />
          </CardContent>
        </Card>

        {!hasResources && (
          <Card className="flex flex-col items-center justify-center p-8 text-center md:col-span-2 lg:col-span-3">
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
