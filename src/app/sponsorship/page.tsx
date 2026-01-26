'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Users, Goal, Briefcase, Mail } from 'lucide-react';

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
                <CardTitle>A Partnership for Impact, Not Profit</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            QuizUp is a free, open-source educational platform dedicated to helping students learn collaboratively. Our mission is to provide high-quality study tools without cost or privacy concerns.
          </p>
          <p className="text-foreground font-medium">
            We are not seeking financial sponsorship. Thanks to a lean operational model and AI-powered development, our costs are minimal. Instead, we are looking for strategic partners willing to contribute their expertise, network, and time as part of their corporate ESG (Environmental, Social, and Governance) mandate.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
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
                <Mail className="w-6 h-6 text-primary" />
                <CardTitle>Get in Touch</CardTitle>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
                If your organization is looking for a meaningful, high-impact ESG initiative and is passionate about the future of education, we would be delighted to explore a partnership.
            </p>
            <p className="mt-4">
                Please contact us at <a href="mailto:gwen@evecount.com" className="font-medium underline text-primary hover:text-primary/80">gwen@evecount.com</a> to start the conversation.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
