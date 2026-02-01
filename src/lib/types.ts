export interface QuizQuestion {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
  rationale: string;
  sourceDetails?: {
    publisher?: string;
    website?: string;
    school?: string;
    documentTitle?: string;
    timestamp?: string;
    pageNumber?: string;
  };
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

export interface School {
  id: string;
  name: string;
  contactEmail: string;
  registrationDate: any; // Can be a Date or a Firestore ServerTimestamp
}
