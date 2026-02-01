import { Bot } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-card/50">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                <div className="text-center sm:text-left sm:col-span-2">
                   <div className="flex items-center justify-center gap-2 sm:justify-start">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/80">
                            <Bot className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <h2 className="text-lg font-bold tracking-tight font-headline">QuizUp</h2>
                    </div>
                     <p className="mt-4 text-sm text-muted-foreground">
                        A free, open-source learning platform for students. We provide AI-powered tools in a safe, anonymous environment—no sign-ups required.
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
                            Contribute
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
                        href="https://artstream.sg"
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
            </div>

             <div className="mt-8 border-t border-border pt-6">
                <p className="text-center text-xs/relaxed text-muted-foreground">
                    © {new Date().getFullYear()} QuizUp, a property of Eve Count Pte Ltd SINGAPORE. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
  );
}
