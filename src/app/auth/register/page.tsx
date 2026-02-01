'use client';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RegistrationForm } from '@/components/auth/RegistrationForm';

export default function RegisterPage() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-10rem)]">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-headline">Create a School Account</CardTitle>
                    <CardDescription>Join Blueprint to create custom reward systems for your students.</CardDescription>
                </CardHeader>
                <CardContent>
                    <RegistrationForm />
                    <p className="mt-4 text-sm text-center text-muted-foreground">
                        Already have an account?{' '}
                        <Link href="/auth/login" className="font-medium underline text-primary">
                            Sign in here
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
