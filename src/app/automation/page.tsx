'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Cpu, Sparkles, Handshake, Mail } from 'lucide-react';
import Link from 'next/link';

export default function AutomationPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">The Future is Adaptive</h1>
        <p className="text-muted-foreground">
          Moving beyond static quizzes to create a personalized learning journey for every student.
        </p>
      </header>
      
      <Card>
        <CardHeader>
            <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-primary" />
                <CardTitle>Executive Summary: The AI-Powered Tutor</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            QuizUp is more than a simple quiz application; it's the foundation for a revolutionary personalized learning ecosystem. Our vision is to transform it into an AI-powered engine that learns about each student's unique strengths and weaknesses.
          </p>
          <p className="font-medium text-foreground">
            The system will generate custom-tailored quizzes that challenge students in areas they excel in and provide targeted support where they struggle. It's not just about getting questions right or wrong—it's about creating a dynamic feedback loop that makes learning more effective and engaging for every single user. This is the future of scalable, one-on-one tutoring.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
             <div className="flex items-center gap-3">
                <Handshake className="w-8 h-8 text-primary" />
                <CardTitle>A Partnership for Deeper Learning</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            For schools and educational organizations, partnering with us on this journey offers a unique opportunity to provide truly scalable, individualized instruction. By implementing this adaptive learning model, you can:
          </p>
          <ul className="space-y-3 list-disc list-inside">
            <li><span className="font-semibold text-foreground">Improve Student Outcomes:</span> Deliver targeted practice that helps students overcome hurdles and build confidence.</li>
            <li><span className="font-semibold text-foreground">Gain Curricular Insights:</span> Anonymized performance data can reveal which topics are most challenging for students across a cohort, allowing for curriculum adjustments.</li>
            <li><span className="font-semibold text-foreground">Enhance Teacher Effectiveness:</span> Free up teacher time by automating personalized practice, allowing them to focus on higher-level instruction and support.</li>
          </ul>
        </CardContent>
      </Card>

      <div>
        <div className="space-y-2 mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-center font-headline">How We'll Build It: The Implementation Roadmap</h2>
            <p className="text-center text-muted-foreground">A non-technical overview of our three-phase approach.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
            <Card className="flex flex-col">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-primary" />
                        <CardTitle className="font-headline">Phase 1: The Student Profile</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 text-sm text-muted-foreground">
                    <p>We start by giving each student a unique, secure, and anonymous profile. Every time they answer a question, the system records the outcome.</p>
                    <p>This builds a detailed but private "learning map" for each user, showing us which concepts they've mastered and where they need more practice—without ever collecting personal information.</p>
                </CardContent>
            </Card>
             <Card className="flex flex-col">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Cpu className="w-6 h-6 text-primary" />
                        <CardTitle className="font-headline">Phase 2: The AI Tutor Engine</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 text-sm text-muted-foreground">
                    <p>This is the "brain." We will develop a sophisticated AI flow that analyzes each student's learning map.</p>
                    <p>The AI will be trained to identify patterns, pinpoint specific knowledge gaps, and understand the nuances of a student's progress over time. It determines not just *what* they got wrong, but *why*.</p>
                </CardContent>
            </Card>
             <Card className="flex flex-col">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Sparkles className="w-6 h-6 text-primary" />
                        <CardTitle className="font-headline">Phase 3: The Adaptive Quiz</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 text-sm text-muted-foreground">
                    <p>This is where the magic happens. When a student starts a quiz, the AI generates a brand new set of questions on the spot, just for them.</p>
                    <p>It pulls harder questions for strong topics and foundational questions for weaker areas, creating a perfectly balanced quiz that is challenging, supportive, and incredibly effective.</p>
                </CardContent>
            </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader>
             <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                <CardTitle>Join Us in Building the Future</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
                We are looking for forward-thinking educational partners to collaborate on this exciting next phase. If you believe in the power of technology to create better learning outcomes, we want to hear from you.
            </p>
            <p className="mt-4">
                Please contact us at <a href="mailto:gwen@evecount.com" className="font-medium underline text-primary hover:text-primary/80">gwen@evecount.com</a> to start the conversation.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
