import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Privacy Policy</h1>
        <p className="text-muted-foreground">
          Your privacy is important to us.
        </p>
      </header>
      <Card>
        <CardHeader>
          <CardTitle>Information We Collect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            QuizUp is designed to be used anonymously. We do not require you to create an account or provide
            any personal identification information to use the core features of our service.
          </p>
          <h3 className="pt-4 text-lg font-semibold text-foreground">Image Uploads</h3>
          <p>
            When you use the "Contribute a Question" feature, you may upload images. These images are processed
            by our AI to extract question text and source metadata. We do not store the original images after
            processing. The extracted text data is anonymized and stored to enrich our question bank.
          </p>
           <h3 className="pt-4 text-lg font-semibold text-foreground">Usage Data</h3>
           <p>
            We may collect information about how the Service is accessed and used ("Usage Data"). This Usage
            Data may include information such as your computer's Internet Protocol address (e.g. IP address),
            browser type, browser version, the pages of our Service that you visit, the time and date of your
            visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>
           <h3 className="pt-4 text-lg font-semibold text-foreground">Changes to This Privacy Policy</h3>
           <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting
            the new Privacy Policy on this page.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
