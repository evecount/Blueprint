import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppProvider';
import { Toaster } from '@/components/ui/toaster';
import { AppLayout } from '@/components/AppLayout';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export const metadata: Metadata = {
  title: 'QuizUp',
  description: 'Create, share, and master subjects with collaborative quizzes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Lexend:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AppProvider>
          <FirebaseClientProvider>
            <AppLayout>{children}</AppLayout>
          </FirebaseClientProvider>
        </AppProvider>
        <Toaster />
      </body>
    </html>
  );
}
