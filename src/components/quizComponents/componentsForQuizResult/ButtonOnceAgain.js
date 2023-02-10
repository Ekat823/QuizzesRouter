import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { QuizContext } from "../../../App";

const ButtonOnceAgain = () => {

  const quizContext = useContext(QuizContext)

  return (
    <>
      <Button
        variant="light"
        size="sm"
        style={{
          marginTop: "15px",
          marginBottom: "15px"
        }}
        onClick={() => quizContext.dispatch({ type: "backToAdjustQuiz" })}
      >
        Once Again
      </Button>
    </>
  )
}

export default ButtonOnceAgain