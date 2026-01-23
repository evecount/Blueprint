'use client';

import {
  PlayCircle,
  UploadCloud,
  FileText,
  MoreVertical,
  Trash2,
} from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

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
import { useState } from 'react';
import UploadResourceDialog from '@/components/resources/UploadResourceDialog';
import { useAppContext } from '@/context/AppProvider';

export default function DashboardPage() {
  const [isUploadDialogOpen, setUploadDialogOpen] = useState(false);
  const { resources, deleteResource } = useAppContext();

  return (
    <div className="flex flex-col gap-8">
      <UploadResourceDialog
        open={isUploadDialogOpen}
        onOpenChange={setUploadDialogOpen}
      />
      <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Welcome to ReviewMate
          </h1>
          <p className="text-muted-foreground">
            Your available quizzes are listed below. Create a new one to get
            started.
          </p>
        </div>
        <Button onClick={() => setUploadDialogOpen(true)} variant="outline">
          <UploadCloud className="mr-2 h-4 w-4" />
          Create Your Own Quiz
        </Button>
      </header>

      <main>
        {resources.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 gap-4 text-center border-2 border-dashed rounded-lg">
            <h3 className="text-xl font-semibold font-headline">
              No Quizzes Found
            </h3>
            <p className="text-muted-foreground">
              Click "Create Your Own Quiz" to generate your first quiz from a
              Markdown file.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resources.map((resource) => (
              <Card key={resource.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <FileText className="w-8 h-8 text-accent" />
                    {resource.id !== 'm8-cis-question-bank' && resource.id !== 'just-math-stuff' && resource.id !== 'm8a-rules-regs-data' && (
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
                    )}
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
                    {resource.questions.length} questions available
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
      </main>
    </div>
  );
}
