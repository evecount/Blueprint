'use client';

import { useAuth, useUser, useFirebaseApp } from '@/firebase';
import { initiateSignOut } from '@/firebase/non-blocking-login';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { LogIn, LogOut, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

export function UserMenu() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const isSchoolUser = user && !user.isAnonymous;

  if (isUserLoading) {
    return <Skeleton className="w-10 h-10 rounded-full" />;
  }

  if (isSchoolUser) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src={user.photoURL || `https://api.dicebear.com/8.x/bottts/svg?seed=${user.uid}`} alt="User Avatar" />
            <AvatarFallback>{user.displayName?.substring(0, 2) || user.email?.substring(0, 2) || 'S'}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>{user.displayName || user.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/dashboard">
            <DropdownMenuItem>
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Dashboard
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => initiateSignOut(auth)} className="text-red-500 focus:text-red-500">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return null;
}
