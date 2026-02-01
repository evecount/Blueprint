
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Users, Goal, Briefcase, Mail, Rocket, Smile, Award, ToyBrick, BrainCircuit } from 'lucide-react';

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

      <Card>
        <CardHeader>
            <div className="flex items-center gap-3">
                <Rocket className="w-8 h-8 text-primary" />
                <CardTitle>Partnership Opportunity II: The Engagement & Rewards Model</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <p>
           Beyond academics, our vision is to build a powerful motivational loop for students through gamification, personalization, and tangible rewards. This presents a unique commercial partnership opportunity for organizations interested in engaging with the youth market in a meaningful way.
          </p>
          <div className="space-y-4">
              <div className="flex items-start gap-4">
                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                    <Smile className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phase 1: AI-Powered Avatars</h3>
                    <p>Students design their own unique profile avatars using text prompts (e.g., "a happy robot with a graduation cap"). Our AI generates a custom image, fostering identity and creativity.</p>
                  </div>
              </div>
               <div className="flex items-start gap-4">
                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phase 2: Digital Badge System</h3>
                    <p>As students master topics, they earn digital badges displayed on their profile. This creates a visual record of their achievements and encourages friendly competition.</p>
                  </div>
              </div>
               <div className="flex items-start gap-4">
                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                    <ToyBrick className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phase 3: The Physical Connection</h3>
                    <p>An e-commerce partnership to allow students to order custom plush toys of their AI-generated avatars. Physical versions of earned badges could be mailed out, creating a tangible trophy of their learning journey.</p>
                  </div>
              </div>
          </div>
           <p className="pt-4 mt-4 font-medium border-t text-foreground border-border/50">
            This model offers a direct and authentic way to connect with students, building brand loyalty through a platform they love. We are seeking a partner to help build and scale this exciting commercial venture.
          </p>
        </CardContent>
      </Card>
      
       <Card className="border-accent">
        <CardHeader>
            <div className="flex items-center gap-3">
                <BrainCircuit className="w-8 h-8 text-accent" />
                <CardTitle className="text-accent font-headline">The Ultimate Vision: From Learner to Trainer</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            The final evolution of this model transforms students from passive learners into active trainers of their own personal AI. As they answer questions, they are not just scoring points—they are providing crucial data that trains a machine learning model unique to them. Their avatar isn't just a picture; it becomes a visual representation of how "smart" their personal AI has become.
          </p>
          <p className="font-medium text-foreground">
            This creates a powerful feedback loop. Students understand that with every quiz, they are making their own AI model more effective. The platform's ultimate stage allows them to deploy this trained AI as a simple "agent," tasked to source new questions that are perfectly optimized for their learning style to maximize their points.
          </p>
          <p>
            We are not just teaching them course material; we are teaching them the fundamental principles of training and using AI in a practical, hands-on environment. Students become "AI native" from the moment they start. This offers a partnership opportunity to be at the forefront of STEM education, preparing an entire generation for the AI-driven future by letting them build it themselves.
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
