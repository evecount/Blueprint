'use client';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-10rem)]">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-headline">Welcome Back</CardTitle>
                    <CardDescription>Sign in to your school account to manage rewards.</CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                    <p className="mt-4 text-sm text-center text-muted-foreground">
                        Don&apos;t have an account?{' '}
                        <Link href="/auth/register" className="font-medium underline text-primary">
                            Register here
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
