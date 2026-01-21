export interface QuizQuestion {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
  rationale: string;
}

export interface Resource {
  id: string;
  name: string;
  questions: QuizQuestion[];
  createdAt: string;
}

export interface Performance {
  [topic: string]: {
    correct: number;
    total: number;
  };
}
