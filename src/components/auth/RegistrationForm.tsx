'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useAuth, useUser, useFirestore } from '@/firebase';
import { initiateEmailSignUp, initiateGoogleSignIn } from '@/firebase/non-blocking-login';
import { createSchoolDocument } from '@/firebase/data/schools';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';

const formSchema = z.object({
  schoolName: z.string().min(3, { message: 'School name must be at least 3 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

export function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const auth = useAuth();
  const firestore = useFirestore();
  const { user } = useUser();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schoolName: '',
      email: '',
      password: '',
    },
  });

  // Redirect if user is already logged in
  useEffect(() => {
    if (user && !user.isAnonymous) {
      router.replace('/dashboard');
    }
  }, [user, router]);
  
  // Create school document after registration
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user && user.metadata.creationTime === user.metadata.lastSignInTime) {
            // This is a new user
            const name = user.displayName || form.getValues('schoolName') || 'New School';
            const email = user.email!;
            await createSchoolDocument(firestore, user.uid, name, email);
            toast({ title: 'Welcome!', description: 'Your school account has been created.' });
        }
    });

    return () => unsubscribe();
  }, [auth, firestore, toast, form]);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await initiateEmailSignUp(auth, values.email, values.password);
      // The onAuthStateChanged effect will handle document creation and redirection
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Registration Failed',
        description: error.message || 'An unknown error occurred.',
      });
      setIsLoading(false);
    }
  }
  
  const handleGoogleSignIn = () => {
    setIsGoogleLoading(true);
    try {
        initiateGoogleSignIn(auth);
    } catch (error: any) {
         toast({
            variant: 'destructive',
            title: 'Google Sign In Failed',
            description: error.message || 'Could not sign in with Google.',
        });
        setIsGoogleLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="schoolName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>School Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Springfield Primary School" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="admin@springfield.edu.sg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading || isGoogleLoading} className="w-full">
            {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Create Account
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading || isGoogleLoading}>
        {isGoogleLoading ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        ) : (
            <svg className="w-4 h-4 mr-2" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 21.2 173.4 56.5l-67.2 67.2C319.4 94.6 287.1 84 248 84c-84.3 0-152.3 68.1-152.3 152s68 152 152.3 152c92.2 0 131.3-64.4 136.8-98.2H248v-85.3h236.1c2.3 12.7 3.9 26.9 3.9 41.8z"></path></svg>
        )}
        Google
      </Button>
    </div>
  );
}
