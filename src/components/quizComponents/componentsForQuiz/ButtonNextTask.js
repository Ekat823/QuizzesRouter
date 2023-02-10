import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import { QuizContext } from "../../../App";

const ButtonNextTask = () => {
    
  const quizContext = useContext(QuizContext)

  return (
    <>
      <Button
        variant="outline-dark"
        style={{ marginBottom: "10px" }}
        onClick={() => quizContext.dispatch({ type: "getNextTask" })}
      >
        Next Task
      </Button>
    </>
  )
}

export default ButtonNextTask