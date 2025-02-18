import { Card } from "@/components/ui/card";
import { useGetAllQuizQuery } from "@/Redux/api/quiz/quizApi";
import { QuizData, setQuiz, TQuiz } from "@/Redux/features/quizSlice";
import { useAppDispatch } from "@/Redux/hooks";

export default function AllQuiz() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetAllQuizQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleSetQuiz = (question: QuizData[]) => {
    // console.log(question)
    dispatch(setQuiz(question));
  };
  return (
    <div>
      <div className="grid grid-cols-8 gap-4 ">
        {data?.map(
          (quiz: TQuiz, index: string) => (
            console.log(quiz.questions),
            (
              <Card
                onClick={() => handleSetQuiz(quiz.questions)}
                key={index}
                className="p-4 hover:shadow-lg cursor-pointer"
              >
                <h3>{quiz.name}</h3>
                <p>{quiz.description}</p>
              </Card>
            )
          )
        )}
      </div>
    </div>
  );
}
