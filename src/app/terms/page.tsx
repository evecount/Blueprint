import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Terms and Conditions</h1>
        <p className="text-muted-foreground">
          Please read these terms and conditions carefully before using Our Service.
        </p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Welcome to Blueprint! These terms and conditions outline the rules and regulations for the use of
            Blueprint's Website, which is a property of Eve Count Pte Ltd Singapore.
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use
            Blueprint if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <h3 className="pt-4 text-lg font-semibold text-foreground">User Contributions</h3>
           <p>
            You grant Eve Count Pte Ltd Singapore and its affiliates a non-exclusive, worldwide, royalty-free, irrevocable,
            perpetual license to use, reproduce, adapt, publish, translate and distribute your contributed
            content in any existing or future media.
          </p>
          <p>
            You grant Eve Count Pte Ltd Singapore and its affiliates the right to use the name that you submit in connection
            with such content, if they choose.
          </p>
          <h3 className="pt-4 text-lg font-semibold text-foreground">Disclaimer</h3>
           <p>
            The materials on Blueprint's website are provided on an 'as is' basis. Eve Count Pte Ltd Singapore makes no warranties,
            expressed or implied, and hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability, fitness for a particular purpose,
            or non-infringement of intellectual property or other violation of rights.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
