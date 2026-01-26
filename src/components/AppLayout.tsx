'use client';

import {
  BarChart2,
  BookOpen,
  Bot,
  Gift,
  Info,
  Menu,
  MessageSquare,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';

import {
  SidebarProvider,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Footer } from './Footer';

const menuItems = [
  { href: '/', label: 'Dashboard', icon: BarChart2 },
  { href: '/resources', label: 'My Quiz Decks', icon: BookOpen },
  { href: '/performance', label: 'My Progress', icon: TrendingUp },
  { href: '/chat', label: 'Chat with Notes', icon: MessageSquare },
  { href: '/contribute', label: 'Contribute Question', icon: Gift },
  { href: '/about', label: 'About', icon: Info },
];

export function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <SidebarProvider className="flex flex-col min-h-screen bg-muted/40">
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between h-16 px-4 bg-background border-b shadow-sm md:px-6">
        <div className="flex items-center gap-4">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
               <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <SidebarHeader className="p-4 border-b">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                      <Bot className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h2 className="text-xl font-bold tracking-tight font-headline">
                      QuizUp
                    </h2>
                  </Link>
                </SidebarHeader>
                <SidebarContent className="flex-1 p-4">
                  <SidebarMenu>
                    {menuItems.map((item) => (
                      <SidebarMenuItem key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setIsSheetOpen(false)}
                          className="w-full"
                        >
                          <SidebarMenuButton isActive={pathname === item.href}>
                            <item.icon />
                            <span>{item.label}</span>
                          </SidebarMenuButton>
                        </Link>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarContent>
                <SidebarFooter className="p-4 mt-auto border-t">
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Avatar className="w-8 h-8">
                          <AvatarImage src="https://picsum.photos/seed/gwen/40/40" />
                          <AvatarFallback>GL</AvatarFallback>
                        </Avatar>
                        <span>Gwendalynn</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarFooter>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <h2 className="hidden text-lg font-bold tracking-tight font-headline sm:block">
              QuizUp
            </h2>
          </Link>
        </div>

        <div className="flex items-center gap-2">
           <Link href="/about" passHref>
            <Button variant="ghost">About</Button>
          </Link>
          <Avatar>
            <AvatarImage src="https://picsum.photos/seed/gwen/40/40" />
            <AvatarFallback>GL</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <div className="p-4 md:p-6 lg:p-8">{children}</div>
      </main>
      <Footer />
    </SidebarProvider>
  );
}
