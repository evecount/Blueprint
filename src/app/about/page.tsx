'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Heart, Shield } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">About QuizUp</h1>
        <p className="text-muted-foreground">
          Our mission: to make learning collaborative and accessible for everyone.
        </p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Because Education Should Be Free</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <p>
            QuizUp was built on a simple but powerful idea: every student deserves access to high-quality study tools without barriers. We believe in the power of community and collaborative learning. This platform is an open-source resource for students, by students (and with a little help from AI!).
          </p>
          <div className="grid gap-6 pt-4 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Community-Driven</h3>
                <p>When you ask a question, you're not just getting an answer—you're helping countless other students who will face the same challenge. It's about paying it forward and building a shared knowledge base for everyone.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI-Powered Learning</h3>
                <p>We use cutting-edge AI to help you create quizzes from your notes, get instant feedback, and even solve tough homework problems. It's like having a personal study assistant, available 24/7.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
       <Card>
        <CardHeader>
            <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-600" />
                <CardTitle>Your Safety and Privacy Are Our Priority</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We take your trust seriously, especially when it comes to young learners. QuizUp is designed from the ground up to be a safe and anonymous environment.
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li><span className="font-semibold text-foreground">No Personal Accounts:</span> We do not require users to sign up or provide personal information like names, emails, or ages.</li>
            <li><span className="font-semibold text-foreground">Anonymous Contributions:</span> All question submissions are anonymous. We do not track who submits what.</li>
            <li><span className="font-semibold text-foreground">No Image Storage:</span> When you scan a question, the image is processed by our AI and immediately discarded. We do not store any images you upload.</li>
            <li><span className="font-semibold text-foreground">Local Data Storage:</span> Your quiz progress and performance data are stored directly on your own device in your browser's local storage. This data is never sent to our servers.</li>
          </ul>
          <p>
            Our goal is to provide a helpful tool with complete peace of mind. For more details, please see our full <Link href="/privacy" className="font-medium underline text-primary hover:text-primary/80">Privacy Policy</Link>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
