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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
  const [characterDescription, setCharacterDescription] = useState('');
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  
  const [storyText, setStoryText] = useState('');
  const [pages, setPages] = useState<StoryPage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isIllustrating, setIsIllustrating] = useState(false);

  const handleCreateStory = async () => {
    if (!storyText.trim()) {
      toast({
        variant: 'destructive',
        title: 'Empty Story',
        description: 'Please write something for your story.',
      });
      return;
    }

    setIsGenerating(true);
    setIsIllustrating(true);
    setPages([]);

    try {
      const storyResult = await createStory({ text: storyText, characterDescription });
      
      if (!storyResult.pages || storyResult.pages.length === 0) {
          throw new Error("The AI could not create pages from the text. It might be due to safety filters or unrecognized content.");
      }

      const newPages: StoryPage[] = storyResult.pages.map((pageData, index) => ({
        pageNumber: index + 1,
        text: pageData.text,
        illustrationPrompt: pageData.illustrationPrompt,
        imageUrl: null,
        isGenerating: true,
      }));

      setPages(newPages);
      setIsGenerating(false);

      for (const newPage of newPages) {
        try {
            const imageResult = await illustrateScene({ prompt: newPage.illustrationPrompt });
            setPages(prev => prev.map(p => 
                p.pageNumber === newPage.pageNumber 
                ? { ...p, imageUrl: imageResult.imageUrl, isGenerating: false } 
                : p
            ));
        } catch (imageError) {
             console.error(`Error generating image for page ${newPage.pageNumber}:`, imageError);
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
      setIsGenerating(false);
    } finally {
      setIsIllustrating(false);
    }
  };

  const renderSetup = () => (
     <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
            <CardTitle className="font-headline">Let's Write a Story!</CardTitle>
            <CardDescription>First, tell us about your author and main character.</CardDescription>
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
                />
                 <p className="text-xs text-muted-foreground">For your safety, please only use a first name.</p>
            </div>
            <div className="space-y-2">
                <Label htmlFor="characterDescription">Describe Your Main Character</Label>
                 <Input
                    id="characterDescription"
                    placeholder="e.g., A girl with short brown hair and glasses"
                    value={characterDescription}
                    onChange={(e) => setCharacterDescription(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">This helps the AI draw them the same way on every page!</p>
            </div>
        </CardContent>
        <CardFooter>
            <Button onClick={() => setIsSetupComplete(true)} disabled={!authorName.trim() || !characterDescription.trim()}>
                Start Writing
            </Button>
        </CardFooter>
     </Card>
  );

  const renderStoryCreator = () => (
    <div className="w-full max-w-4xl mx-auto space-y-8">
        {pages.length === 0 && (
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Write Your Story</CardTitle>
                    <CardDescription>
                        Write your full story here. Our AI editor will split it into pages and create illustrations for you.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Textarea
                        placeholder="Once upon a time..."
                        rows={10}
                        value={storyText}
                        onChange={(e) => setStoryText(e.target.value)}
                        disabled={isGenerating || isIllustrating}
                    />
                </CardContent>
                <CardFooter>
                    <Button onClick={handleCreateStory} disabled={isGenerating || isIllustrating || !storyText.trim()}>
                        {isGenerating ? <><Loader2 className="mr-2 animate-spin" />Creating Story...</> :
                         isIllustrating ? <><Loader2 className="mr-2 animate-spin" />Drawing Book...</> :
                         <><Wand2 className="mr-2" />Create My Storybook</>}
                    </Button>
                </CardFooter>
            </Card>
        )}

        {pages.length > 0 && (
             <div className="space-y-4">
                 <div className="space-y-2 text-center">
                    <h2 className="text-4xl font-bold tracking-tight font-headline">My Storybook</h2>
                    <p className="text-lg text-muted-foreground">by {authorName}</p>
                </div>
                <Carousel className="w-full">
                    <CarouselContent>
                        {pages.map((page) => (
                             <CarouselItem key={page.pageNumber}>
                                <Card className="overflow-hidden">
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
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden -left-4 sm:flex" />
                    <CarouselNext className="hidden -right-4 sm:flex" />
                </Carousel>
                <div className="flex justify-center">
                    <Button variant="outline" onClick={() => setPages([])}>Start a New Story</Button>
                </div>
            </div>
        )}

    </div>
  );

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Storybook Creator</h1>
        <p className="text-muted-foreground">
          Write your story and watch our AI bring it to life with illustrations!
        </p>
      </header>
       <Alert>
            <Sparkles className="h-4 w-4" />
            <AlertTitle>How It Works</AlertTitle>
            <AlertDescription>
                Tell us about your character, write your story, and our AI will automagically create an illustrated book for you.
            </AlertDescription>
        </Alert>

      {!isSetupComplete ? renderSetup() : renderStoryCreator()}
    </div>
  );
}
