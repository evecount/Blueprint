import QuizClientPage from '@/components/quiz/QuizClientPage';

export default function QuizPage({ params }: { params: { id: string } }) {
  return <QuizClientPage resourceId={params.id} />;
}
