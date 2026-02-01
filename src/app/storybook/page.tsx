'use client';

import { useState } from 'react';
import { BookImage, Loader2, Sparkles, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { illustrateScene } from '@/ai/flows/storybook-illustrator-flow';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { createStory } from '@/ai/flows/create-story-flow';

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

  const handleAddPages = async () => {
    if (!currentPageText.trim()) {
      toast({
        variant: 'destructive',
        title: 'Empty Page',
        description: 'Please write something for your story.',
      });
      return;
    }

    setIsGenerating(true);
    const textToAdd = currentPageText;
    setCurrentPageText(''); // Clear input immediately

    try {
      // Step 1: Call the new flow to split text into pages and get prompts.
      const storyResult = await createStory({ text: textToAdd });
      
      if (!storyResult.pages || storyResult.pages.length === 0) {
          throw new Error("The AI could not create pages from the text. It might be due to safety filters or unrecognized content.");
      }

      // Prepare an array of new pages to add to the state
      const newPages: StoryPage[] = storyResult.pages.map((pageData, index) => ({
        pageNumber: pages.length + index + 1,
        text: pageData.text,
        illustrationPrompt: pageData.illustrationPrompt,
        imageUrl: null,
        isGenerating: true,
      }));

      // Add all new pages to the state at once to render them
      setPages(prev => [...prev, ...newPages]);

      // Step 2: Sequentially generate the image for each new page
      for (const newPage of newPages) {
        try {
            const imageResult = await illustrateScene({ prompt: newPage.illustrationPrompt });
            // Update the specific page with its generated image
            setPages(prev => prev.map(p => 
                p.pageNumber === newPage.pageNumber 
                ? { ...p, imageUrl: imageResult.imageUrl, isGenerating: false } 
                : p
            ));
        } catch (imageError) {
             console.error(`Error generating image for page ${newPage.pageNumber}:`, imageError);
             // Update the specific page to show an error state
             setPages(prev => prev.map(p => 
                p.pageNumber === newPage.pageNumber 
                ? { ...p, imageUrl: '/images/error-placeholder.png', isGenerating: false } 
                : p
            ));
        }
      }

    } catch (error) {
      console.error('Error generating story pages:', error);
      toast({
        variant: 'destructive',
        title: 'Story Creation Failed',
        description: error instanceof Error ? error.message : 'Could not create story pages from the text.',
      });
      // Re-add the text to the input so the user doesn't lose it
      setCurrentPageText(textToAdd);
    } finally {
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
                <CardTitle>Add to Your Story</CardTitle>
                <CardDescription>Write the next part of your story, or paste the whole thing in at once!</CardDescription>
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
                <Button onClick={handleAddPages} disabled={isGenerating}>
                    {isGenerating ? (
                        <>
                            <Loader2 className="mr-2 animate-spin" />
                            Adding to Story...
                        </>
                    ) : (
                        <>
                            <Wand2 className="mr-2" />
                            Add to My Storybook
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
                Write one part of your story, click "Add to My Storybook," and our AI will draw a picture for it. You can write a little or a lot!
            </AlertDescription>
        </Alert>

      {!isAuthorSet ? renderAuthorInput() : renderStoryCreator()}
    </div>
  );
}
