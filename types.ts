
export enum Category {
  LEGISLACAO = 'Legislação de Trânsito',
  SINALIZACAO = 'Sinalização',
  DIRECAO_DEFENSIVA = 'Direção Defensiva',
  PRIMEIROS_SOCORROS = 'Primeiros Socorros',
  MEIO_AMBIENTE = 'Meio Ambiente e Cidadania',
  MECANICA = 'Noções de Mecânica'
}

export interface Question {
  id: number;
  category: Category;
  text: string;
  options: string[];
  correctAnswer: number; // Index of options array (0-3)
  imageUrl?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: {
    correct: number;
    wrong: number;
  };
  userAnswers: (number | null)[];
  isFinished: boolean;
}
