import { Bot } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t bg-card/50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex justify-center text-muted-foreground sm:justify-start">
                   <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/80">
                            <Bot className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <h2 className="text-lg font-bold tracking-tight font-headline">QuizUp</h2>
                    </div>
                </div>

                <div className="mt-4 text-center sm:mt-0 sm:text-left">
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Sponsored By
                    </p>
                    <a
                        href="https://artstream.sg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block"
                       >
                        <Image
                          src="/artstream-logo.svg"
                          alt="artSTREAM.media logo"
                          width={160}
                          height={32}
                          className="h-auto w-40"
                        />
                       </a>
                </div>
            </div>
             <div className="mt-8 border-t border-border pt-4">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-center text-xs/relaxed text-muted-foreground">
                        © {new Date().getFullYear()} QuizUp, a property of Eve Count. All Rights Reserved.
                    </p>
                    <nav className="flex gap-4 text-xs text-muted-foreground">
                        <Link href="/terms" className="transition-colors hover:text-foreground">
                            Terms & Conditions
                        </Link>
                        <Link href="/privacy" className="transition-colors hover:text-foreground">
                            Privacy Policy
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
  );
}
