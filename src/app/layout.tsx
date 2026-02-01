import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppProvider';
import { Toaster } from '@/components/ui/toaster';
import { AppLayout } from '@/components/AppLayout';
import { FirebaseClientProvider } from '@/firebase/client-provider';

const siteUrl = 'https://blueprintalk.com';

export const metadata: Metadata = {
  title: 'Blueprint: AI Study Tools & Storybook Creator',
  description: 'Blueprint is a free learning platform with AI-powered quiz generation, homework help, and a magical storybook creator that turns your child\'s words into an illustrated colouring book.',
  keywords: ['AI study tools', 'quiz generator', 'homework help', 'storybook creator', 'coloring book maker', 'free educational resources', 'collaborative learning', 'AI for students', 'parenting tools'],
  openGraph: {
    title: 'Blueprint: AI Study Tools & Storybook Creator',
    description: 'A free, AI-powered learning platform with quiz generation and a magical storybook creator.',
    url: siteUrl,
    siteName: 'Blueprint',
    images: [
      {
        url: `${siteUrl}/images/hero-section.png`, // Assuming the hero image is the OG image
        width: 1200,
        height: 630,
        alt: 'A student studying with AI-powered tools on Blueprint.'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blueprint: AI Study Tools & Storybook Creator',
    description: 'A free, AI-powered learning platform with quiz generation and a magical storybook creator.',
    images: [`${siteUrl}/images/hero-section.png`],
  },
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
