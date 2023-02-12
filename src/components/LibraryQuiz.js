import React, { useContext } from "react";
import AdjustQuiz from "./quizComponents/AdjustQuiz";
import RunQuiz from "./quizComponents/RunQuiz";
import QuizResult from "./quizComponents/QuizResult";
import Library from "./Library";
import { QuizContext } from "../App";

const LibraryQuiz = () => {
  
  const quizContext = useContext(QuizContext);

  return (
    <>
    {quizContext.state.quizStatus === "library: adjust" ? <AdjustQuiz />
    : quizContext.state.quizStatus === "library: quiz" ? <RunQuiz />
    : quizContext.state.quizStatus === "library: result" ? <QuizResult />
    : <Library />
    }
    </>
  )
}

export default LibraryQuiz