'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, DollarSign, BrainCircuit, Handshake, Info } from 'lucide-react';
import Link from 'next/link';

export default function FaqPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">
          Answers to common questions about QuizUp.
        </p>
      </header>
      <Card>
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <Info className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-left">What is QuizUp?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                QuizUp is a free, open-source AI-powered study platform designed for students. It allows users to create interactive quizzes from their notes, master subjects through practice, and contribute to a collaborative learning community. For schools, it offers a platform to create custom reward systems and track student engagement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-left">How is QuizUp free?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our core mission is to make education accessible. We operate on a lean model, leveraging AI for development and relying on community contributions. We partner with organizations for ESG initiatives (skills-based volunteering) rather than financial sponsorship for our core platform. Read more on our <Link href="/sponsorship" className="underline">Sponsorship page</Link>.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-left">Is it safe for students?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Safety and privacy are our top priorities. The student-facing platform is designed for anonymous use—no sign-ups, names, or personal information are required. Quiz progress is stored locally on the user's device. You can learn more in our <Link href="/privacy" className="underline">Privacy Policy</Link>.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <Handshake className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-left">How can our school partner with QuizUp?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Schools can register for an account to create and manage custom reward systems for their students. We are also looking for partners to help us scale our impact through skills-based volunteering and strategic advice. Please visit our <Link href="/sponsorship" className="underline">Sponsorship page</Link> or contact us for more information.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-5">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <BrainCircuit className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-left">What is the long-term vision for QuizUp?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our long-term vision is to create a fully adaptive learning ecosystem. Using AI, the platform will learn each student's strengths and weaknesses to generate personalized quizzes that target their specific needs. This creates a dynamic feedback loop that makes learning more effective and engaging. You can read about this on our <Link href="/automation" className="underline">Automation page</Link>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
