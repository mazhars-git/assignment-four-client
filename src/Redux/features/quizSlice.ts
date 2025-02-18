import { createSlice } from "@reduxjs/toolkit";
import { quizData } from "../../home/quizData";

interface QuizState {
  questions: typeof quizData;
  currentQuestionIndex: number;
  userAnswers: (string | null)[]; // Track user answers (null means no answer selected)
  quizComplete: boolean;
}
// make quzData type interface
export interface QuizData {
  question: string;
  options: string[];
  correctAnswer: string;
}
export type TQuiz = {
  _id: string;
  name: string;
  description: string;
  questions: QuizData[];
  createdAt: Date;
  updatedAt: Date;
};
const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: Array(quizData.length).fill(null), // Initialize with null for each question
  quizComplete: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswers[questionIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    completeQuiz: (state) => {
      state.quizComplete = true;
    },
    setQuiz: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const {
  setAnswer,
  nextQuestion,
  previousQuestion,
  completeQuiz,
  setQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
