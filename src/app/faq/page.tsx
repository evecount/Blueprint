'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, DollarSign, BrainCircuit, Handshake, Info, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function FaqPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">
          Answers to common questions about Blueprint.
        </p>
      </header>
      <Card>
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <Info className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-left">What is Blueprint?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Blueprint is a free, open-source AI-powered study platform designed for students. It allows users to create interactive quizzes from their notes, master subjects through practice, and contribute to a collaborative learning community. For schools, it offers a platform to create custom reward systems and track student engagement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-left">How is Blueprint free?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Blueprint is free because it's built on a social enterprise model. Our mission is to make education accessible. The platform is open-source, and we operate on a lean model, leveraging AI for development and relying on community contributions. Instead of charging for the core product, we partner with organizations for ESG initiatives (skills-based volunteering). This keeps the tool free for students and schools forever. You can read more on our <Link href="/sponsorship" className="underline">Sponsorship page</Link>.
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
                Yes, absolutely. Safety is our most important design principle. The student-facing platform is designed for completely anonymous use. We do not require students to sign up, create accounts, or provide any personal information like names or emails. All quiz progress is stored locally on the user's own device. This privacy-first approach means students get a powerful study tool with zero risk to their personal data. You can learn more in our <Link href="/privacy" className="underline">Privacy Policy</Link>.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <Handshake className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-left">How can our school partner with Blueprint?</span>
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
                  <span className="font-semibold text-left">What is the long-term vision for Blueprint?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our long-term vision is to create a fully adaptive learning ecosystem. Using AI, the platform will learn each student's strengths and weaknesses to generate personalized quizzes that target their specific needs. This creates a dynamic feedback loop that makes learning more effective and engaging. You can read about this on our <Link href="/automation" className="underline">Automation page</Link>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-start gap-4">
            <GraduationCap className="w-8 h-8 mt-1 text-primary" />
            <div>
              <CardTitle>Teacher’s Guide: AI-Driven Curriculum Alignment</CardTitle>
              <p className="italic text-muted-foreground">How we ensure 100% Safety and Academic Rigor</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">To maintain the trust of educators, our AI agent operates within a <strong>Closed-Loop Knowledge Base</strong>. This means it does not "guess" what a 7-year-old should know; instead, it uses the provided papers as a structural and linguistic anchor.</p>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground">1. Linguistic Guardrails (The Vocabulary Filter)</h3>
            <p className="mt-1 text-muted-foreground">The AI analyzes the "word density" of the provided assessments. For example:</p>
            <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
              <li><span className="font-semibold text-foreground">Constraint:</span> Instead of using "enormous" or "colossal," the AI is instructed to use "very big," matching the level found in the <strong>2021 Revision Paper</strong>.</li>
              <li><span className="font-semibold text-foreground">Safety:</span> This prevents students from being tested on words they haven't been taught in the MOE syllabus yet.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground">2. Structural Pattern Recognition</h3>
            <p className="mt-1 text-muted-foreground">Our database allows the AI to recognize that a <strong>Primary 1 English Assessment</strong> must follow a specific "scaffolding":</p>
            <ol className="mt-2 space-y-1 list-decimal list-inside text-muted-foreground">
              <li><strong>Grammar MCQs</strong> to build confidence (Tenses/Pronouns).</li>
              <li><strong>Vocabulary MCQs</strong> to test world knowledge (Animal sounds/Transport).</li>
              <li><strong>Synthesis & Cloze</strong> to test sentence logic and context.</li>
              <li><strong>Comprehension</strong> to assess literal and inferential reading.</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground">3. Verification through Verbatim Grounding</h3>
            <p className="mt-1 text-muted-foreground">By including the 2018, 2019, and 2021 papers verbatim, we provide a "Source of Truth." If a teacher asks, <em>"Why did the AI generate a question about past tense?"</em> we can point directly to <strong>Paper 1 (2021)</strong> or <strong>Paper 4 (2018)</strong> where "yesterday" is used to trigger the past tense response "showed" or "ate".</p>
          </div>

          <div className="pt-4 border-t">
            <h3 className="text-lg font-semibold text-foreground">The "Safe Generation" Workflow</h3>
            <ol className="mt-2 space-y-1 list-decimal list-inside text-muted-foreground">
                <li><strong>Input:</strong> Verbatim PDF data (The "Truth").</li>
                <li><strong>Analysis:</strong> Extracting the "Pattern" (The "Rules").</li>
                <li><strong>Generation:</strong> Creating new questions that fit the "Rules" but use new "Themes."</li>
                <li><strong>Verification:</strong> Comparing the new question against the "Truth" to ensure it isn't too difficult.</li>
            </ol>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
