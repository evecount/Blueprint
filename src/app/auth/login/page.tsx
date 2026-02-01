'use client';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LoginForm } from '@/components/auth/LoginForm';
import { Award, Badge, Sparkles } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="container flex items-center justify-center min-h-[calc(100vh-10rem)] py-12">
            <div className="grid w-full max-w-5xl gap-12 lg:grid-cols-2">
                <Card>
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

                 <div className="flex flex-col justify-center space-y-6">
                    <div className="space-y-2 text-center lg:text-left">
                        <h2 className="text-3xl font-bold font-headline">Create a World of Rewards</h2>
                        <p className="text-muted-foreground">
                            Registering your school unlocks a powerful new way to motivate and engage your students.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Custom Rewards</h4>
                                <p className="text-sm text-muted-foreground">Design unique badges and achievements for milestones in any subject.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Gamified Learning</h4>
                                <p className="text-sm text-muted-foreground">Turn study and practice into a fun, rewarding game for your entire class.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                             <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                                <Badge className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Track Engagement</h4>
                                <p className="text-sm text-muted-foreground">Get insights into student participation and which topics are most engaging.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
