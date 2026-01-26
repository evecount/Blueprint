
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Heart } from 'lucide-react';

export default function SponsorshipPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Sponsor QuizUp</h1>
        <p className="text-muted-foreground">
          Help us keep education free and accessible for every student.
        </p>
      </header>
      <Card>
        <CardHeader>
            <div className="flex items-center gap-3">
                <Handshake className="w-8 h-8 text-primary" />
                <CardTitle>Partner with Us</CardTitle>
            </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            QuizUp is a free, open-source educational platform dedicated to helping students learn collaboratively. Our mission is to provide high-quality study tools without cost or privacy concerns.
          </p>
          <p>
            We are looking for partners who share our vision for accessible education. Your sponsorship helps us cover our operational costs and continue to develop new features for learners everywhere.
          </p>
          <div className="flex items-start gap-4 pt-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Why Sponsor Us?</h3>
                <p>By sponsoring QuizUp, you are directly contributing to a safe, anonymous, and effective learning environment for students. Your support helps us remain a free resource, built by the community, for the community.</p>
              </div>
            </div>
           <div className="pt-6 text-center">
                <h3 className="font-semibold text-foreground">Get in Touch</h3>
                <p>To learn more about sponsorship opportunities, please contact us at <a href="mailto:sponsorship@quizup.example.com" className="font-medium underline text-primary hover:text-primary/80">sponsorship@quizup.example.com</a>.</p>
           </div>
        </CardContent>
      </Card>
    </div>
  );
}
