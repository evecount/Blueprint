'use client';

import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function SchoolLayout({ children }: { children: React.ReactNode }) {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    // If loading is finished and there's no user or the user is anonymous, redirect
    if (!isUserLoading && (!user || user.isAnonymous)) {
      router.replace('/auth/login');
    }
  }, [user, isUserLoading, router]);

  // While checking auth state, show a loader
  if (isUserLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  // If there's a signed-in, non-anonymous user, show the content
  if (user && !user.isAnonymous) {
    return <>{children}</>;
  }

  // Otherwise, render nothing while redirecting
  return null;
}
