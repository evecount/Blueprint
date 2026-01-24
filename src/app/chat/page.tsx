'use client';

import { useState, useRef, ChangeEvent } from 'react';
import { Bot, Loader2, Send, UploadCloud, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { askQuestion } from '@/ai/flows/chat-flow';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

type Message = {
  text: string;
  isUser: boolean;
};

export default function ChatPage() {
  const [documentContent, setDocumentContent] = useState<string | null>(null);
  const [documentName, setDocumentName] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'text/markdown' && !file.name.endsWith('.md') && file.type !== 'text/plain') {
      toast({
        variant: 'destructive',
        title: 'Invalid File Type',
        description: 'Please upload a Markdown (.md) or Text (.txt) file.',
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setDocumentContent(e.target?.result as string);
      setDocumentName(file.name);
      setMessages([]); // Clear previous chat
      toast({
        title: 'File Uploaded',
        description: `Now you can ask questions about "${file.name}".`,
      });
    };
    reader.onerror = () => {
      toast({
        variant: 'destructive',
        title: 'File Read Error',
        description: 'There was an error reading your file.',
      });
    };
    reader.readAsText(file);
  };

  const handleSendMessage = async () => {
    if (!query.trim() || !documentContent) return;

    const userMessage: Message = { text: query, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setQuery('');
    setIsLoading(true);

    try {
      const result = await askQuestion({
        documentContent,
        query,
      });
      const botMessage: Message = { text: result.answer, isUser: false };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        text: 'Sorry, I encountered an error. Please try again.',
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
      toast({
        variant: 'destructive',
        title: 'Chat Error',
        description: 'Failed to get a response from the assistant.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)]">
      <header className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Chat with Your Notes</h1>
        <p className="text-muted-foreground">
          Upload your notes and get instant answers to your questions.
        </p>
      </header>

      <div className="flex-1 min-h-0">
        {!documentContent ? (
          <div className="flex items-center justify-center h-full">
            <Card className="w-full max-w-md text-center">
              <CardHeader>
                <CardTitle className="font-headline">Upload Your Notes to Start</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Select a Markdown (.md) or text (.txt) file with your notes to begin.</p>
                <Button onClick={() => fileInputRef.current?.click()}>
                  <UploadCloud className="w-4 h-4 mr-2" />
                  Upload Notes
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".md,.txt,text/markdown,text/plain"
                />
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <Card className="flex-1 min-h-0">
                <CardContent className="flex flex-col h-full p-4">
                    <div className="flex items-center justify-between p-2 mb-2 border rounded-md bg-muted/50">
                        <p className="text-sm font-medium truncate">
                            Chatting about: <span className="font-bold">{documentName}</span>
                        </p>
                        <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>Change File</Button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".md,.txt,text/markdown,text/plain"
                        />
                    </div>
                    <ScrollArea className="flex-1 p-4 pr-2 mb-4 -mx-4">
                        <div className="space-y-6">
                        {messages.map((message, index) => (
                            <div
                            key={index}
                            className={cn(
                                'flex items-start gap-3',
                                message.isUser ? 'justify-end' : 'justify-start'
                            )}
                            >
                            {!message.isUser && (
                                <Avatar className="w-8 h-8">
                                <AvatarFallback><Bot /></AvatarFallback>
                                </Avatar>
                            )}
                            <div
                                className={cn(
                                'p-3 rounded-lg max-w-sm md:max-w-md lg:max-w-lg',
                                message.isUser
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted'
                                )}
                            >
                                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                            </div>
                            {message.isUser && (
                                <Avatar className="w-8 h-8">
                                    <AvatarFallback><User /></AvatarFallback>
                                </Avatar>
                            )}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-start gap-3">
                                <Avatar className="w-8 h-8">
                                    <AvatarFallback><Bot /></AvatarFallback>
                                </Avatar>
                                <div className="p-3 bg-muted rounded-lg">
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                </div>
                            </div>
                        )}
                        </div>
                    </ScrollArea>
                    <div className="flex items-center gap-2">
                        <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Ask a question about the document..."
                        disabled={isLoading}
                        />
                        <Button onClick={handleSendMessage} disabled={isLoading || !query.trim()}>
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
