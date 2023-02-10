import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import { QuizContext } from "../../../App";

const ButtonTaskNumber = () => {
    
  const quizContext = useContext(QuizContext)

  return (
    <>
      <Button
        variant="outline-light"
        style={{
          color: "black",
          border: "0px",
          backgroundColor: "white",
          marginBottom: "10px"
        }}
        active
      >
        Task {quizContext.state.taskNumber}
      </Button>
    </>
  )
}

export default ButtonTaskNumber