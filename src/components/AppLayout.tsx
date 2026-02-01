'use client';

import {
  BarChart2,
  BookImage,
  BookOpen,
  Gift,
  Info,
  Menu,
  MessageSquare,
  TrendingUp,
  Cpu,
  LogIn,
  ToyBrick,
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
import { Button } from './ui/button';
import { Footer } from './Footer';
import { UserMenu } from './auth/UserMenu';
import { useUser } from '@/firebase';
import { cn } from '@/lib/utils';

const studentMenuItems = [
  { href: '/', label: 'Dashboard', icon: BarChart2 },
  { href: '/resources', label: 'My Quiz Decks', icon: BookOpen },
  { href: '/performance', label: 'My Progress', icon: TrendingUp },
  { href: '/chat', label: 'Chat with Notes', icon: MessageSquare },
  { href: '/contribute', label: 'Ask a Question', icon: Gift },
  { href: '/math-challenge', label: 'Math Challenge', icon: ToyBrick },
  { href: '/storybook', label: 'Storybook Creator', icon: BookImage },
];

const infoMenuItems = [
    { href: '/automation', label: 'Automation', icon: Cpu },
    { href: '/about', label: 'About', icon: Info },
]

export function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { user } = useUser();
  const isSchoolUser = user && !user.isAnonymous;

  const isMathChallengePage = pathname === '/math-challenge';

  if (isMathChallengePage) {
    return <main>{children}</main>;
  }

  return (
    <SidebarProvider className="flex flex-col min-h-screen bg-background">
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
                    className="flex items-center"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <h2 className="text-xl font-bold tracking-tight font-headline">
                      Blueprint
                    </h2>
                  </Link>
                </SidebarHeader>
                <SidebarContent className="flex-1 p-4">
                  <SidebarMenu>
                    {studentMenuItems.map((item) => (
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
                  <SidebarMenu className='mt-4 pt-4 border-t'>
                     {infoMenuItems.map((item) => (
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
                  <UserMenu />
                </SidebarFooter>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center">
            <h2 className="text-lg font-bold tracking-tight font-headline">
              Blueprint
            </h2>
          </Link>
        </div>

        <div className="flex items-center gap-2">
           <Link href="/about" passHref>
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="/storybook" passHref>
            <Button>
              <BookImage className="mr-2" />
              Create A Storybook
            </Button>
          </Link>
          <UserMenu />
        </div>
      </header>

      <main className="flex-1 pt-16">
        <div className="p-4 md:p-6 lg:p-8">{children}</div>
      </main>
      <Footer />
    </SidebarProvider>
  );
}
