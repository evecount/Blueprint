'use client';

import { useState } from 'react';
import { BookImage, Loader2, Sparkles, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { createPagePrompt } from '@/ai/flows/create-storybook-page-flow';
import { illustrateScene } from '@/ai/flows/storybook-illustrator-flow';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// New type for a single page in our story
type StoryPage = {
  pageNumber: number;
  text: string;
  illustrationPrompt: string;
  imageUrl: string | null;
  isGenerating: boolean;
};

export default function StorybookCreatorPage() {
  const { toast } = useToast();
  const [authorName, setAuthorName] = useState('');
  const [isAuthorSet, setIsAuthorSet] = useState(false);
  const [currentPageText, setCurrentPageText] = useState('');
  const [pages, setPages] = useState<StoryPage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAddPage = async () => {
    if (!currentPageText.trim()) {
      toast({
        variant: 'destructive',
        title: 'Empty Page',
        description: 'Please write something for this page.',
      });
      return;
    }

    setIsGenerating(true);
    const newPageNumber = pages.length + 1;
    let tempPage: StoryPage = {
      pageNumber: newPageNumber,
      text: currentPageText,
      illustrationPrompt: '',
      imageUrl: null,
      isGenerating: true,
    };
    
    // Add a temporary page to show loading state immediately
    setPages(prev => [...prev, tempPage]);
    setCurrentPageText(''); // Clear input for next page

    try {
      // Step 1: Generate the illustration prompt from the text
      const promptResult = await createPagePrompt({ text: tempPage.text });
      if (promptResult.illustrationPrompt === "Invalid content detected.") {
          throw new Error("The AI detected inappropriate content. Please try again.");
      }
      
      // Update temp page with the prompt
      tempPage.illustrationPrompt = promptResult.illustrationPrompt;

      // Step 2: Generate the image from the prompt
      const imageResult = await illustrateScene({ prompt: tempPage.illustrationPrompt });
      tempPage.imageUrl = imageResult.imageUrl;

    } catch (error) {
      console.error('Error generating page:', error);
      toast({
        variant: 'destructive',
        title: 'Page Creation Failed',
        description: error instanceof Error ? error.message : 'Could not create the illustration for this page.',
      });
      // Set an error image or remove the page
      tempPage.imageUrl = '/images/error-placeholder.png'; 
    } finally {
      tempPage.isGenerating = false;
      // Update the page in the state with the final result
      setPages(prev => prev.map(p => p.pageNumber === newPageNumber ? tempPage : p));
      setIsGenerating(false);
    }
  };

  const renderAuthorInput = () => (
     <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
            <CardTitle className="font-headline">Let's Write a Story!</CardTitle>
            <CardDescription>First, tell us the author's name.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
             <div className="space-y-2">
                <Label htmlFor="authorName">Author's First Name</Label>
                <Input
                    id="authorName"
                    placeholder="e.g., Alex"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    maxLength={20}
                    onKeyDown={(e) => e.key === 'Enter' && authorName.trim() && setIsAuthorSet(true)}
                />
                 <p className="text-xs text-muted-foreground">For your safety, please only use a first name.</p>
            </div>
        </CardContent>
        <CardFooter>
            <Button onClick={() => setIsAuthorSet(true)} disabled={!authorName.trim()}>
                Start Writing
            </Button>
        </CardFooter>
     </Card>
  );

  const renderStoryCreator = () => (
    <div className="w-full max-w-4xl mx-auto space-y-8">
        <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold tracking-tight font-headline">My Storybook</h1>
            <p className="text-lg text-muted-foreground">by {authorName}</p>
        </div>

        {/* Display completed pages */}
        <div className="space-y-6">
            {pages.map((page) => (
                <Card key={page.pageNumber} className="overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="flex items-center justify-center p-6 bg-muted aspect-square">
                           {page.isGenerating ? (
                                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                    <Loader2 className="w-8 h-8 animate-spin" />
                                    <p>Drawing page {page.pageNumber}...</p>
                                </div>
                            ) : page.imageUrl ? (
                                <Image
                                    src={page.imageUrl}
                                    alt={`Illustration for page ${page.pageNumber}`}
                                    width={500}
                                    height={500}
                                    className="object-contain w-full h-full rounded-md"
                                />
                            ) : null}
                        </div>
                         <div className="flex flex-col justify-between p-6">
                            <p className="flex-1 text-lg leading-relaxed text-muted-foreground">{page.text}</p>
                            <p className="self-end mt-4 text-sm font-medium">{page.pageNumber}</p>
                        </div>
                    </div>
                </Card>
            ))}
        </div>

        {/* Input for the next page */}
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Page {pages.length + 1}</CardTitle>
                <CardDescription>Write the next part of your story here.</CardDescription>
            </CardHeader>
            <CardContent>
                <Textarea
                    placeholder="What happens next?"
                    rows={4}
                    value={currentPageText}
                    onChange={(e) => setCurrentPageText(e.target.value)}
                    disabled={isGenerating}
                />
            </CardContent>
            <CardFooter>
                <Button onClick={handleAddPage} disabled={isGenerating}>
                    {isGenerating ? (
                        <>
                            <Loader2 className="mr-2 animate-spin" />
                            Illustrating...
                        </>
                    ) : (
                        <>
                            <Wand2 className="mr-2" />
                            Add This Page
                        </>
                    )}
                </Button>
            </CardFooter>
        </Card>
    </div>
  );

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Storybook Creator</h1>
        <p className="text-muted-foreground">
          Write your story one page at a time and watch it come to life!
        </p>
      </header>
       <Alert>
            <Sparkles className="h-4 w-4" />
            <AlertTitle>How It Works</AlertTitle>
            <AlertDescription>
                Write one part of your story, click "Add This Page," and our AI will draw a picture for it. Then you can write the next part!
            </AlertDescription>
        </Alert>

      {!isAuthorSet ? renderAuthorInput() : renderStoryCreator()}
    </div>
  );
}
