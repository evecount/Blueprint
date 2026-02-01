'use client';

import { useState } from 'react';
import { BookImage, Loader2, Sparkles, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { createStorybook, StorybookOutput } from '@/ai/flows/create-storybook-flow';
import { illustrateScene } from '@/ai/flows/storybook-illustrator-flow';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type StorybookWithImages = Omit<StorybookOutput, 'pages'> & {
  pages: (StorybookOutput['pages'][0] & { imageUrl?: string; isGenerating?: boolean })[];
};

export default function StorybookCreatorPage() {
  const { toast } = useToast();
  const [authorName, setAuthorName] = useState('');
  const [storyText, setStoryText] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [storybook, setStorybook] = useState<StorybookWithImages | null>(null);

  const handleCreateStory = async () => {
    if (!authorName.trim() || !storyText.trim()) {
      toast({
        variant: 'destructive',
        title: 'Missing Information',
        description: 'Please enter your first name and a story.',
      });
      return;
    }
    setIsGenerating(true);
    setIsEditing(false);
    setStorybook(null);

    try {
      const storyData = await createStorybook({
        authorFirstName: authorName,
        story: storyText,
      });

      if (storyData.title === 'Invalid Story' || storyData.pages.length === 0) {
          toast({
              variant: 'destructive',
              title: 'Story Cannot Be Processed',
              description: 'The AI could not process your story. Please ensure it is appropriate and does not contain personal details.',
          });
          setIsEditing(true);
          return;
      }
      
      const initialStorybookState: StorybookWithImages = {
          ...storyData,
          pages: storyData.pages.map(p => ({ ...p, isGenerating: true })),
      };
      setStorybook(initialStorybookState);
      
      // Generate images sequentially
      for (let i = 0; i < storyData.pages.length; i++) {
        const page = storyData.pages[i];
        try {
          const imageResult = await illustrateScene({ prompt: page.illustrationPrompt });
          setStorybook(currentStorybook => {
            if (!currentStorybook) return null;
            const updatedPages = [...currentStorybook.pages];
            updatedPages[i] = { ...updatedPages[i], imageUrl: imageResult.imageUrl, isGenerating: false };
            return { ...currentStorybook, pages: updatedPages };
          });
        } catch (imageError) {
            console.error(`Failed to generate image for page ${i+1}:`, imageError);
            // Update state to show image generation failed for this page
             setStorybook(currentStorybook => {
                if (!currentStorybook) return null;
                const updatedPages = [...currentStorybook.pages];
                updatedPages[i] = { ...updatedPages[i], isGenerating: false, imageUrl: '/images/error-placeholder.png' }; // Use an error placeholder
                return { ...currentStorybook, pages: updatedPages };
            });
             toast({
                variant: 'destructive',
                title: `Image Generation Failed`,
                description: `Could not create the illustration for page ${i + 1}.`,
            });
        }
      }

    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Story Creation Failed',
        description: 'The AI could not create your story. Please try again.',
      });
      setIsEditing(true);
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleEdit = () => {
      setIsEditing(true);
      setStorybook(null);
  }

  const renderForm = () => (
    <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
            <CardTitle className="font-headline">Create Your Own Storybook</CardTitle>
            <CardDescription>Write a short story and our AI will illustrate it for you, page by page.</CardDescription>
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
                 <p className="text-xs text-muted-foreground">For your safety, please only use your first name.</p>
            </div>
            <div className="space-y-2">
                <Label htmlFor="storyText">Your Short Story</Label>
                <Textarea
                    id="storyText"
                    placeholder="Once upon a time, in a land full of talking animals..."
                    rows={8}
                    value={storyText}
                    onChange={(e) => setStoryText(e.target.value)}
                />
            </div>
        </CardContent>
        <CardFooter>
            <Button onClick={handleCreateStory} disabled={isGenerating}>
                <Wand2 className="mr-2" />
                Create My Storybook
            </Button>
        </CardFooter>
    </Card>
  );

  const renderStorybook = () => {
    if (!storybook) {
        return (
             <div className="flex flex-col items-center justify-center gap-4 text-center w-full max-w-3xl mx-auto h-96">
                <Loader2 className="w-12 h-12 animate-spin text-primary" />
                <p className="text-lg text-muted-foreground">Our AI Editor is reading your story...</p>
                <p className="text-sm text-muted-foreground">This may take a moment.</p>
            </div>
        )
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="space-y-2 text-center mb-8">
                <h1 className="text-4xl font-bold tracking-tight font-headline">{storybook.title}</h1>
                <p className="text-lg text-muted-foreground">by {storybook.author}</p>
            </div>
            
            <Carousel className="w-full">
                <CarouselContent>
                    {storybook.pages.map((page) => (
                        <CarouselItem key={page.pageNumber}>
                            <div className="p-1">
                                <Card className="overflow-hidden">
                                    <div className="grid md:grid-cols-2">
                                        <div className="flex items-center justify-center p-6 bg-muted aspect-square">
                                            {page.isGenerating ? (
                                                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                                    <Loader2 className="w-8 h-8 animate-spin" />
                                                    <p>Drawing...</p>
                                                </div>
                                            ): page.imageUrl ? (
                                                <Image
                                                    src={page.imageUrl}
                                                    alt={`Illustration for page ${page.pageNumber}`}
                                                    width={500}
                                                    height={500}
                                                    className="object-contain w-full h-full rounded-md"
                                                />
                                            ) : (
                                                <div className="text-center text-destructive">Image failed to load.</div>
                                            )}
                                        </div>
                                        <div className="flex flex-col p-6">
                                            <p className="flex-1 text-muted-foreground">{page.text}</p>
                                            <p className="self-end mt-4 text-sm font-medium">{page.pageNumber}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 md:-left-12" />
                <CarouselNext className="-right-4 md:-right-12" />
            </Carousel>
            
            <div className="flex justify-center mt-8">
                 <Button onClick={handleEdit} variant="outline">
                    Write a New Story
                </Button>
            </div>
        </div>
    );
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Storybook Creator</h1>
        <p className="text-muted-foreground">
          Turn your imagination into a real book, illustrated by AI!
        </p>
      </header>
       <Alert>
            <Sparkles className="h-4 w-4" />
            <AlertTitle>How It Works</AlertTitle>
            <AlertDescription>
                Write your story, and our AI "Editor" will split it into pages. Then, our AI "Illustrator" will draw a picture for each page.
            </AlertDescription>
        </Alert>

      {isEditing ? renderForm() : renderStorybook()}
    </div>
  );
}
