import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default function SchoolDashboardPage() {
  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">School Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your school&apos;s reward systems and track engagement.
          </p>
        </div>
        <Button>
          <PlusCircle className="w-4 h-4 mr-2" />
          Create Reward System
        </Button>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Coming Soon!</CardTitle>
          <CardDescription>
            This dashboard is under construction. Soon, you will be able to create and manage custom reward programs for your students right here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center h-64 gap-4 text-center border-2 border-dashed rounded-lg">
            <h3 className="text-xl font-semibold font-headline">Reward System Management</h3>
            <p className="max-w-md text-muted-foreground">
              You&apos;ll be able to define milestones, design rewards, and generate unique codes for different grades and subjects.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
