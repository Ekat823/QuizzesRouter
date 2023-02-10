import React, { useContext } from "react";
import { QuizContext } from "../../../App";

const SolvedTasks = () => {

  const quizContext = useContext(QuizContext)

  return (
    <>
      <p
        style={{
          marginTop: "15px",
          marginBottom: "15px"
        }}
      >
        You've solved {quizContext.state.averageScore} {quizContext.state.averageScore === 1 ? "task" : "tasks"} <br />on the first try.
      </p>
    </>
  )
}

export default SolvedTasks