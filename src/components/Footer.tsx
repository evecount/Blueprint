import { Bot } from 'lucide-react';
import Image from 'next/image';

const sponsors = [
    { name: 'Sponsor 1', logoUrl: 'https://picsum.photos/seed/sponsor1/120/40', href: '#' },
    { name: 'Sponsor 2', logoUrl: 'https://picsum.photos/seed/sponsor2/120/40', href: '#' },
    { name: 'Sponsor 3', logoUrl: 'https://picsum.photos/seed/sponsor3/120/40', href: '#' },
];

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

                <div className="mt-4 sm:mt-0">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground text-center sm:text-left">
                        Sponsored By
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4">
                        {sponsors.map((sponsor) => (
                        <a key={sponsor.name} href={sponsor.href} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                            <Image 
                                src={sponsor.logoUrl} 
                                alt={sponsor.name} 
                                width={100} 
                                height={32}
                                className="object-contain brightness-0 invert-[.25] dark:invert"
                            />
                        </a>
                        ))}
                    </div>
                </div>
            </div>
             <div className="mt-8 border-t border-border pt-4">
                <p className="text-center text-xs/relaxed text-muted-foreground">
                    © {new Date().getFullYear()} QuizUp. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
  );
}
