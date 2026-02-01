'use client';

import { Bot } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="border-t bg-card/50">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                <div className="text-center sm:text-left sm:col-span-2">
                   <div className="flex items-center justify-center gap-2 sm:justify-start">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/80">
                            <Bot className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <h2 className="text-lg font-bold tracking-tight font-headline">Blueprint</h2>
                    </div>
                     <p className="mt-4 text-sm text-muted-foreground">
                        A free, open-source learning platform providing a plan for learning and a foundation for creative expression. We provide the AI-powered tools to chart your own educational path in a safe, anonymous environment—no student sign-ups required.
                    </p>
                </div>

                 <div className="text-center sm:text-left">
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        About
                    </p>
                    <nav className="mt-4 flex flex-col gap-2 text-sm">
                        <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                            Our Mission
                        </Link>
                         <Link href="/contribute" className="text-muted-foreground transition-colors hover:text-foreground">
                            Ask a Question
                        </Link>
                        <Link href="/automation" className="text-muted-foreground transition-colors hover:text-foreground">
                            Automation
                        </Link>
                        <Link href="/sponsorship" className="text-muted-foreground transition-colors hover:text-foreground">
                            Sponsorship
                        </Link>
                        <Link href="/faq" className="text-muted-foreground transition-colors hover:text-foreground">
                            FAQ
                        </Link>
                    </nav>
                </div>
                
                 <div className="text-center sm:text-left">
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        For Schools
                    </p>
                    <nav className="mt-4 flex flex-col gap-2 text-sm">
                        <Link href="/auth/login" className="text-muted-foreground transition-colors hover:text-foreground">
                            School Login
                        </Link>
                         <Link href="/sponsorship" className="text-muted-foreground transition-colors hover:text-foreground">
                            Partnerships
                        </Link>
                    </nav>
                </div>

                 <div className="text-center sm:text-left">
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Legal
                    </p>
                    <nav className="mt-4 flex flex-col gap-2 text-sm">
                        <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                            Terms &amp; Conditions
                        </Link>
                        <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                            Privacy Policy
                        </Link>
                    </nav>
                </div>
            </div>
            
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
               <div className="text-center sm:text-left">
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Sponsored By
                    </p>
                    <a
                        href="https://evecount.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block"
                       >
                        <img
                          src="/images/artSTREAM-logo.png"
                          alt="artSTREAM.media logo"
                          width={160}
                          height={32}
                          className="h-auto w-40 mx-auto sm:mx-0"
                        />
                       </a>
                </div>
                <div className="text-center sm:text-left">
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Powered By
                    </p>
                    <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center sm:justify-start gap-2 text-foreground group">
                        <svg viewBox="0 0 24 24" className="w-9 h-9 text-primary group-hover:text-primary/80 transition-colors" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C11.4082 4.93333 9.06667 7.275 6.13333 7.86667C9.06667 8.45833 11.4082 10.8 12 13.7333C12.5918 10.8 14.9333 8.45833 17.8667 7.86667C14.9333 7.275 12.5918 4.93333 12 2Z" fill="currentColor"/>
                            <path d="M19 8C18.6667 9.4 17.6 10.4667 16.2 10.8C17.6 11.1333 18.6667 12.2 19 13.6C19.3333 12.2 20.4 11.1333 21.8 10.8C20.4 10.4667 19.3333 9.4 19 8Z" fill="currentColor"/>
                        </svg>
                        <span className="text-lg font-bold group-hover:text-foreground/80 transition-colors">Gemini</span>
                    </a>
                </div>
            </div>

             <div className="mt-8 border-t border-border pt-6">
                <p className="text-center text-xs/relaxed text-muted-foreground">
                    © {isClient && `${new Date().getFullYear()} `}Blueprint, a property of <a href="https://evecount.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Eve Count Pte Ltd SINGAPORE</a>. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
  );
}
