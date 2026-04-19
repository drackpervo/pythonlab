
export type Level = 'Débutant' | 'Intermédiaire' | 'Avancé';

export interface Tutorial {
  id: string;
  title: string;
  level: Level;
  description: string;
  content: string;
  codeExample?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  description: string;
  link: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  level: Level;
  description: string;
  questions: Question[];
}

export interface PlaygroundExample {
  id: string;
  title: string;
  description: string;
  code: string;
}
