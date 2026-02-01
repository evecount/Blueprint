'use client';

import { useState, useRef, useEffect } from 'react';
import { Camera, Gift, Loader2, Sparkles, X, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { solveQuestion, SolveQuestionOutput } from '@/ai/flows/solve-question-flow';
import { useAppContext } from '@/context/AppProvider';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// A simplified display for the generated question.
function GeneratedQuestionPreview({ question }: { question: SolveQuestionOutput }) {
  return (
    <Card className="mt-6 bg-muted/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Sparkles className="text-accent" /> AI Generated Question
        </CardTitle>
        <CardDescription>Review the generated question and its source before contributing it.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-foreground">
                <span className='font-bold text-primary'>{question.level}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                <span className='font-bold'>{question.subject}</span>
            </div>
        </div>
        <p className="font-semibold">{question.question}</p>
        <div className="space-y-2">
          {question.answers.map((answer, index) => (
            <div
              key={index}
              className={`p-3 border rounded-md text-sm ${index === question.correctAnswerIndex ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-border'}`}
            >
              {answer}
            </div>
          ))}
        </div>
        <div>
          <h4 className="font-semibold">Rationale:</h4>
          <p className="text-sm text-muted-foreground">{question.rationale}</p>
        </div>

        {question.sourceDetails && Object.values(question.sourceDetails).some(v => v) && (
            <div className="pt-4 mt-4 border-t">
                <h4 className="mb-2 font-semibold">Extracted Source Details</h4>
                <div className="grid grid-cols-1 gap-2 text-sm md:grid-cols-2 text-muted-foreground">
                    {Object.entries(question.sourceDetails).map(([key, value]) => 
                        value ? (
                            <div key={key} className="flex flex-wrap gap-x-2">
                                <span className="font-medium capitalize text-foreground">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                <span>{value}</span>
                            </div>
                        ) : null
                    )}
                </div>
            </div>
        )}
      </CardContent>
    </Card>
  );
}

// Helper function to create a deck ID
const createDeckId = (level: string, subject: string): string => {
    const levelMapping: { [key: string]: string } = {
      'primary 1': 'p1', 'primary 2': 'p2', 'primary 3': 'p3',
      'primary 4': 'p4', 'primary 5': 'p5', 'primary 6': 'p6',
      'secondary 1': 's1', 'secondary 2': 's2', 'secondary 3': 's3', 'secondary 4': 's4',
      'advanced': 'adv',
    };
    const levelPrefix = levelMapping[level.toLowerCase()] || 'adv';
    const subjectSlug = subject.toLowerCase().replace(/\s+/g, '-');
    return `${levelPrefix}-${subjectSlug}`;
};


export default function ContributePage() {
  const { resources, addQuestionToResource, addResource } = useAppContext();
  const { toast } = useToast();
  
  const [isLoading, setIsLoading] = useState(false);
  const [generatedQuestion, setGeneratedQuestion] = useState<SolveQuestionOutput | null>(null);

  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Request camera permission
  useEffect(() => {
    if (!isCameraActive) {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
        videoRef.current.srcObject = null;
      }
      return;
    }

    const getCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        setHasCameraPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        setIsCameraActive(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description: 'Please enable camera permissions in your browser settings.',
        });
      }
    };
    
    getCameraPermission();
    
    // Cleanup function
    return () => {
       if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    }
  }, [isCameraActive, toast]);

  const handleCaptureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    const context = canvas.getContext('2d');
    context?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    
    const imageDataUri = canvas.toDataURL('image/jpeg');
    setCapturedImage(imageDataUri);
    setIsCameraActive(false); // Turn off camera view
  };

  const handleRetake = () => {
    setCapturedImage(null);
    setGeneratedQuestion(null);
    setIsCameraActive(true);
  };
  
  const handleGenerateQuestion = async () => {
    if (!capturedImage) {
      toast({
        variant: 'destructive',
        title: 'Missing Information',
        description: 'Please capture a photo first.',
      });
      return;
    }
    
    setIsLoading(true);
    setGeneratedQuestion(null);

    try {
      const result = await solveQuestion({ imageDataUri: capturedImage });

      if (result.question === "Invalid Input Detected" || result.answers.length === 0) {
        throw new Error("The AI detected invalid or unsafe content. Please try another image.");
      }

      setGeneratedQuestion(result);
      toast({
        title: 'Question Generated!',
        description: 'Review the question below and click "Contribute" to add it.',
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: error instanceof Error ? error.message : 'The AI could not generate a question from the image. Please try retaking the photo.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleContributeQuestion = () => {
    if (!generatedQuestion) return;

    const { level, subject } = generatedQuestion;

    if (!level || !subject) {
        toast({
            variant: 'destructive',
            title: 'Classification Failed',
            description: 'The AI could not determine the subject or level. Please try another image.',
        });
        return;
    }

    const deckId = createDeckId(level, subject);
    const deckName = `${level} ${subject}`;
    const existingDeck = resources.find(r => r.id === deckId);

    if (existingDeck) {
      addQuestionToResource(deckId, generatedQuestion);
    } else {
      addResource({ name: deckName, questions: [generatedQuestion] }, deckId);
    }

    toast({
      title: 'Thank You!',
      description: `Your question has been added to the "${deckName}" deck.`,
    });

    // Reset state
    setCapturedImage(null);
    setGeneratedQuestion(null);
  };

  const renderInitialState = () => (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>Stuck on Homework?</CardTitle>
        <CardDescription>Scan your question to get an AI answer. When you contribute it, you're helping the next person who gets stuck.</CardDescription>
      </CardHeader>
      <CardContent>
         <Button size="lg" onClick={() => setIsCameraActive(true)}>
            <Camera className="mr-2"/>
            Scan Question with Camera
        </Button>
      </CardContent>
    </Card>
  );

  const renderCameraState = () => (
    <Card>
      <CardHeader>
        <CardTitle>Scan Your Question</CardTitle>
        <CardDescription>Position the question clearly in the frame and press capture.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative w-full overflow-hidden border rounded-md aspect-video bg-muted">
            <video ref={videoRef} className="w-full h-full" autoPlay playsInline muted />
            <canvas ref={canvasRef} className="hidden" />
            {hasCameraPermission === false && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-background/80">
                    <Alert variant="destructive">
                        <AlertTitle>Camera Access Required</AlertTitle>
                        <AlertDescription>
                            Please allow camera access in your browser to use this feature. You may need to refresh the page.
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
      </CardContent>
      <CardFooter className="justify-between">
         <Button variant="outline" onClick={() => setIsCameraActive(false)}>
            <X className="mr-2"/>
            Cancel
        </Button>
        <Button size="lg" onClick={handleCaptureImage} disabled={!hasCameraPermission}>
            <Camera className="mr-2"/>
            Capture
        </Button>
      </CardFooter>
    </Card>
  );

  const renderCapturedState = () => (
      <Card>
        <CardHeader>
          <CardTitle>Review Your Scan</CardTitle>
          <CardDescription>Is the question clear? If so, let our AI solve and categorize it.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <img src={capturedImage!} alt="Captured homework question" className="w-full border rounded-md" />
        </CardContent>
        <CardFooter className="justify-between">
            <Button variant="outline" onClick={handleRetake} disabled={isLoading}>
                <RefreshCw className="mr-2"/>
                Retake Photo
            </Button>
            <Button onClick={handleGenerateQuestion} disabled={isLoading || !capturedImage}>
                {isLoading ? <Loader2 className="mr-2 animate-spin" /> : <Sparkles className="mr-2" />}
                Generate Question
            </Button>
        </CardFooter>
      </Card>
  );


  const renderMainContent = () => {
    if (isCameraActive) return renderCameraState();
    if (capturedImage) return renderCapturedState();
    return renderInitialState();
  };

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Contribute a Question</h1>
        <p className="text-muted-foreground">
          Get help with your homework and help someone else pass. Because education should be free.
        </p>
      </header>

      {renderMainContent()}
      
      {generatedQuestion && (
        <div className="space-y-4">
            <GeneratedQuestionPreview question={generatedQuestion} />
            <div className="flex justify-end">
                <Button onClick={handleContributeQuestion} size="lg">
                    <Gift className="mr-2"/>
                    Confirm and Contribute
                </Button>
            </div>
        </div>
      )}
    </div>
  );
}
