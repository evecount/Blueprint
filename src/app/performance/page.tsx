'use client';

import PerformanceTracker from '@/components/dashboard/PerformanceTracker';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PerformancePage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">My Performance</h1>
        <p className="text-muted-foreground">
          Track your quiz scores over time to see your progress.
        </p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Overall Score by Quiz</CardTitle>
          <CardDescription>
            This chart shows your average percentage score for each quiz you've completed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PerformanceTracker />
        </CardContent>
      </Card>
    </div>
  );
}
