import React, { useContext } from "react";
import CardCreateQuiz from "./createQuizComponent/CardCreateQuiz";
import AdjustQuiz from "./quizComponents/AdjustQuiz";
import RunQuiz from "./quizComponents/RunQuiz";
import QuizResult from "./quizComponents/QuizResult";
import { QuizContext } from "../App";

const CreateQuiz = () => {

  const quizContext = useContext(QuizContext)

  return (
    <>
      {
        quizContext.state.quizStatus === "create: adjust" ? <AdjustQuiz />
          : quizContext.state.quizStatus === "create: quiz" ? <RunQuiz />
            : quizContext.state.quizStatus === "create: result" ? <QuizResult />
              : <CardCreateQuiz />
      }
    </>
  )
}

export default CreateQuiz