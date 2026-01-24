'use client';

import PerformanceTracker from '@/components/dashboard/PerformanceTracker';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PerformancePage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">My Progress</h1>
        <p className="text-muted-foreground">
          Track your scores and see how you improve over time.
        </p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Overall Score by Deck</CardTitle>
          <CardDescription>
            This chart shows your average score for each deck you've completed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PerformanceTracker />
        </CardContent>
      </Card>
    </div>
  );
}
