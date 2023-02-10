import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { QuizContext } from "../../../App";

const ButtonAnotherQuiz = () => {
    
  const quizContext = useContext(QuizContext)

  return (
    <>
      <Button
        variant="outline-secondary"
        size="sm"
        style={{
          padding: "0px 5px 0px 5px",
          marginTop: "25px"
        }}
        onClick={() => quizContext.dispatch({ type: "goToAnotherQuiz" })}
      >
        <small>Another Quiz</small>
      </Button>
    </>
  )
}

export default ButtonAnotherQuiz