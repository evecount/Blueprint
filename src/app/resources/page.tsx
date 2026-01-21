'use client';

import { useState } from 'react';
import { Book, FileText, MoreVertical, Pencil, PlayCircle, Trash2, UploadCloud } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppContext } from '@/context/AppProvider';
import UploadResourceDialog from '@/components/resources/UploadResourceDialog';

export default function ResourcesPage() {
  const { resources, deleteResource } = useAppContext();
  const [isUploadDialogOpen, setUploadDialogOpen] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <UploadResourceDialog open={isUploadDialogOpen} onOpenChange={setUploadDialogOpen} />
      <header className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight font-headline">My Resources</h1>
          <p className="text-muted-foreground">Manage your study materials and start new quizzes.</p>
        </div>
        <Button onClick={() => setUploadDialogOpen(true)}>
          <UploadCloud className="mr-2 h-4 w-4" />
          Upload New
        </Button>
      </header>

      {resources.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 gap-4 text-center border-2 border-dashed rounded-lg">
          <h3 className="text-xl font-semibold font-headline">No Resources Found</h3>
          <p className="text-muted-foreground">Click "Upload New" to add your first study material.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {resources.map((resource) => (
            <Card key={resource.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  {resource.type === 'Textbook' ? (
                    <Book className="w-8 h-8 text-accent" />
                  ) : (
                    <FileText className="w-8 h-8 text-accent" />
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="w-8 h-8 -mt-2 -mr-2">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => deleteResource(resource.id)}>
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <CardTitle className="pt-4 font-headline">{resource.name}</CardTitle>
                <CardDescription>
                  {resource.type} &bull; Created {new Date(resource.createdAt).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {resource.questions && (
                  <p className="text-sm text-muted-foreground">{resource.questions.length} questions available</p>
                )}
              </CardContent>
              <CardFooter>
                <Link href={`/quiz/${resource.id}`} passHref className="w-full">
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
  );
}
