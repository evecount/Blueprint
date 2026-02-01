'use client';

import {
  PlayCircle,
  MoreVertical,
  Smartphone,
  Cpu,
  Gift,
} from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppContext } from '@/context/AppProvider';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function DashboardPage() {
  const { resources } = useAppContext();
  const heroImage = PlaceHolderImages.find((img) => img.id === 'dashboard-hero');
  const router = useRouter();

  // New state for filters
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');

  // Derive filter options from resources
  const { levels, subjects } = useMemo(() => {
    const levelSet = new Set<string>();
    const subjectSet = new Set<string>();
    const levelLabels: { [key: string]: string } = {
      p1: 'Primary 1',
      p2: 'Primary 2',
      p3: 'Primary 3',
      p4: 'Primary 4',
      p5: 'Primary 5',
      p6: 'Primary 6',
      s1: 'Secondary 1',
      s2: 'Secondary 2',
      s3: 'Secondary 3',
      s4: 'Secondary 4',
      adv: 'Advanced',
    };
    const subjectLabels: { [key: string]: string } = {
      english: 'English',
      math: 'Maths',
      science: 'Science',
      'social-studies': 'Social Studies',
      history: 'History',
      biology: 'Biology',
      physics: 'Physics',
      chemistry: 'Chemistry',
      finance: 'Finance',
      art: 'Art',
    };

    resources.forEach((r) => {
      const parts = r.id.split('-');
      if (parts.length > 0) levelSet.add(parts[0]);
      if (parts.length > 1) {
        const subject = parts.slice(1).join('-');
        subjectSet.add(subject);
      }
    });

    // Create a stable order for levels
    const levelOrder = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 's1', 's2', 's3', 's4', 'adv'];
    const sortedLevels = Array.from(levelSet).sort((a, b) => levelOrder.indexOf(a) - levelOrder.indexOf(b));

    return {
      levels: sortedLevels.map((l) => ({ value: l, label: levelLabels[l] || l })),
      subjects: Array.from(subjectSet)
        .map((s) => ({
          value: s,
          label:
            subjectLabels[s] ||
            s
              .split('-')
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(' '),
        }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    };
  }, [resources]);

  // Filter resources based on selection
  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const [levelPrefix, ...subjectParts] = resource.id.split('-');
      const subject = subjectParts.join('-');

      const levelMatch = selectedLevel === 'all' || levelPrefix === selectedLevel;
      const subjectMatch = selectedSubject === 'all' || subject === selectedSubject;
      return levelMatch && subjectMatch;
    });
  }, [resources, selectedLevel, selectedSubject]);

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl font-headline">
            Ask Any Question.
            <br />
            Understand Why.
          </h1>
          <p className="text-lg text-muted-foreground">
            Stuck on a problem? Scan it or type it in. Our AI will not only solve it but give you a clear, step-by-step rationale so you truly understand the concept.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-primary" />
              <span className="font-medium">Mobile Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" />
              <span className="font-medium">AI Powered</span>
            </div>
          </div>
          <div className="pt-4">
            <Link href="/contribute" passHref>
              <Button size="lg" className="w-full sm:w-auto">
                <Gift className="mr-2" />
                Ask a Question
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-lg shadow-2xl aspect-square">
          {heroImage && (
            <img
              src={heroImage.imageUrl}
              alt={heroImage.description}
              className="absolute inset-0 w-full h-full object-cover"
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
      </section>

      {/* Quiz Decks Section */}
      <main>
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight font-headline">
            Available Quiz Decks
          </h2>
          <p className="text-muted-foreground">
            Explore a community-built library of quizzes or contribute your own.
          </p>
        </div>

        {/* Filters Section */}
        {resources.length > 0 && (
          <div className="flex flex-col gap-4 py-8 sm:flex-row">
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Filter by level..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                {levels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Filter by subject..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                {subjects.map((subject) => (
                  <SelectItem key={subject.value} value={subject.value}>
                    {subject.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div>
          {resources.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 gap-4 pt-8 text-center border-2 border-dashed rounded-lg">
              <h3 className="text-xl font-semibold font-headline">
                No Quiz Decks Yet
              </h3>
              <p className="text-muted-foreground">
                Click "Ask a Question" to help build our first quiz deck.
              </p>
            </div>
          ) : filteredResources.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 gap-4 text-center border-2 border-dashed rounded-lg">
              <h3 className="text-xl font-semibold font-headline">
                No Decks Found
              </h3>
              <p className="text-muted-foreground">
                No quiz decks match your selected filters. Try a different combination.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredResources.map((resource) => {
                const resourceImage = PlaceHolderImages.find((img) => img.id === resource.id);
                return (
                  <Card key={resource.id} className="relative overflow-hidden rounded-lg shadow-lg group aspect-square">
                    <Link href={`/quiz/${resource.id}`} passHref className="absolute inset-0 z-10">
                      <span className="sr-only">Start quiz for {resource.name}</span>
                    </Link>
                    
                    {resourceImage && (
                      <img
                        src={resourceImage.imageUrl}
                        alt={resourceImage.description}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={resourceImage.imageHint}
                      />
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />

                    {/* Content */}
                    <div className="relative flex flex-col justify-between h-full p-4 text-white">
                      {/* Top section with title and dropdown */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold font-headline">{resource.name}</h3>
                          <p className="text-sm text-white/80">{resource.questions.length} cards</p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="relative z-20 text-white bg-black/20 hover:bg-black/50 hover:text-white h-8 w-8 -mr-2 -mt-2">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onSelect={() => router.push(`/quiz/${resource.id}`)}>
                                <PlayCircle className="w-4 h-4 mr-2" />
                                Start Quiz
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      {/* Bottom section with play icon */}
                      <div className="self-end">
                          <PlayCircle className="w-10 h-10 opacity-80" />
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
