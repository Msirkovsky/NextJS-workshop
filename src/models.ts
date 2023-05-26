
export type Answer = {
  content: string;
  id: number;
}

export type Question = {
  content: string,
  answers: Answer[]
  id: number
}

export type QuestionModel = {
  content: string,
  answers: Answer[]
  id: number
  message: string | null
  correct: boolean | null
}
