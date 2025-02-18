// import { Question } from "./home/Question";

import AddQuiz from "./home/AddQuiz";
import AllQuiz from "./home/AllQuiz";
import { Question } from "./home/Question";
import { QuizSummary } from "./home/QuizSummary";
import { useAppSelector } from "./Redux/hooks";
import { Toaster } from "@/components/ui/sonner"
const App = () => {
  const { quizComplete } = useAppSelector((state) => state.quiz);
  return (
    <div className="container mx-auto p-4">
         <Toaster />
      <h1 className="text-center text-9xl my-12">Quiz App</h1>
      <AddQuiz ></AddQuiz>
      <AllQuiz></AllQuiz>
      {!quizComplete ? <Question /> : <QuizSummary />}
    </div>
  );
};

export default App;
