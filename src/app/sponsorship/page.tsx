'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Users, Goal, Briefcase, Mail, Smile, Award, ToyBrick, BrainCircuit } from 'lucide-react';

export default function SponsorshipPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Partner with QuizUp</h1>
        <p className="text-muted-foreground">
          Join us in democratizing education through community and technology.
        </p>
      </header>
      <Card>
        <CardHeader>
            <div className="flex items-center gap-3">
                <Handshake className="w-8 h-8 text-primary" />
                <CardTitle>Partnership Opportunity I: ESG &amp; Social Impact</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            QuizUp is a free, open-source educational platform dedicated to helping students learn collaboratively. Our mission is to provide high-quality study tools without cost or privacy concerns.
          </p>
          <p className="text-foreground font-medium">
            We are not seeking financial sponsorship for our core mission. Thanks to a lean operational model and AI-powered development, our costs are minimal. Instead, we are looking for strategic partners willing to contribute their expertise, network, and time as part of their corporate ESG (Environmental, Social, and Governance) mandate.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions (FAQ) for ESG Partners</CardTitle>
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                    <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-left">What kind of partnership are you looking for?</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We are looking for partners who can help us scale our impact. Your contribution of skills and network is far more valuable to us than funding. We're interested in skills-based volunteering, introductions to educational institutions and non-profits, and mentorship for our team.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                    <div className="flex items-center gap-3">
                        <Goal className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-left">How does this align with our ESG goals?</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Partnering with QuizUp is a direct and measurable way to advance the "Social" component of your ESG strategy. By supporting us, you are promoting educational equity, fostering digital inclusion for all students, and investing in community development. It's a tangible project that demonstrates a commitment to creating a positive social impact.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                    <div className="flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-left">What can our employees do to volunteer?</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We welcome skills-based volunteers from your organization. Your team can contribute in several ways:
                  <ul className="mt-2 space-y-2 list-disc list-inside">
                    <li><span className="font-semibold">Content Curators:</span> Help review and align quiz content with the latest Ministry of Education syllabus.</li>
                    <li><span className="font-semibold">Community Ambassadors:</span> Champion QuizUp and help introduce the platform to schools, tuition centers, and community groups.</li>
                    <li><span className="font-semibold">Tech & Strategy Mentors:</span> Provide guidance on scaling our technology, product strategy, and outreach efforts.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        </CardContent>
      </Card>

      <Card className="border-accent">
        <CardHeader>
            <div className="flex items-center gap-3">
                <ToyBrick className="w-8 h-8 text-accent" />
                <CardTitle className="text-accent font-headline">A Vision for Growth: Custom Rewards & Engagement</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <p>
           Beyond the core academic mission, we envision a powerful engagement ecosystem built on personalization, gamification, and rewards. This presents a unique growth opportunity for a partner to co-create a system that genuinely connects with students and inspires a love for learning.
          </p>
          <p className="text-lg font-medium text-foreground">
            This isn't a fixed roadmap, but a series of ideas to spark collaboration:
          </p>
          <div className="space-y-4">
              <div className="flex items-start gap-4">
                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                    <Smile className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Idea 1: AI-Powered Avatars</h3>
                    <p>Students could design unique avatars with AI, giving them a personal identity on the platform and a visual representation of their learning companion.</p>
                  </div>
              </div>
               <div className="flex items-start gap-4">
                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Idea 2: A Custom Badge & Points System</h3>
                    <p>Students earn points and digital badges for mastering topics. This could be integrated with a partner's existing reward system or we could build a new one together.</p>
                  </div>
              </div>
               <div className="flex items-start gap-4">
                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                    <ToyBrick className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Idea 3: The Physical-Digital Bridge</h3>
                    <p>Imagine students ordering custom plush toys of their avatars, or receiving physical versions of badges in the mail—a tangible trophy for their hard work.</p>
                  </div>
              </div>
          </div>
           <p className="pt-4 mt-4 font-medium border-t text-foreground border-border/50">
            The goal is to build a system where students are motivated to learn. While the core focus remains on the syllabus, this framework allows ambitious students to explore advanced topics on their own time. It's a chance to be at the forefront of education, supporting a platform that excels at curriculum-based learning while also providing a safe space for curiosity to flourish. We are open to new ideas and a true partnership in building this out.
          </p>
        </CardContent>
      </Card>

      <Card className="border-accent">
        <CardHeader>
            <div className="flex items-center gap-3">
                <BrainCircuit className="w-8 h-8 text-accent" />
                <CardTitle className="text-accent font-headline">The Learning Moat: Creating AI Trainers</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
            <p className="text-lg font-medium text-foreground">
                Our most advanced model creates an unparalleled technological moat for our partners by transforming how students learn.
            </p>
            <p>
                The platform goes beyond simple quizzing. It reframes the learning process: students are not just users; they become **AI trainers**. Every quiz they take, every answer they give, is an act of teaching their own personal AI avatar.
            </p>
            <ul className="space-y-3 list-disc list-inside">
                <li><span className="font-semibold text-foreground">Deep Mastery Through Teaching:</span> The best way to learn a subject is to teach it. By "training" their AI companion on the school syllabus, students reinforce their own knowledge at a much deeper level.</li>
                <li><span className="font-semibold text-foreground">Intuitive Understanding of AI:</span> In a safe and gamified environment, students gain an intuitive grasp of how supervised learning models work. They are learning the core concepts of the AI-driven future simply by playing.</li>
                 <li><span className="font-semibold text-foreground">A Pipeline for AI-Native Talent:</span> For a partner organization, this isn't just an app—it's an investment in cultivating a generation of AI-native thinkers. You're aligning with a platform that is fundamentally changing how students interact with technology and knowledge.</li>
            </ul>
            <p className="pt-4 mt-4 font-medium border-t text-foreground border-border/50">
                This pedagogical approach—teaching students to be teachers for an AI—is a unique and powerful differentiator that creates a true learning advantage.
            </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
             <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                <CardTitle>Get in Touch</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
                Whether you're interested in our ESG initiatives or the commercial rewards model, if your organization is passionate about the future of education, we would be delighted to explore a partnership.
            </p>
            <p className="mt-4">
                Please contact us at <a href="mailto:gwen@evecount.com" className="font-medium underline text-primary hover:text-primary/80">gwen@evecount.com</a> to start the conversation.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
