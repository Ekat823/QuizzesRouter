import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { QuizContext } from "../../../App";

const ButtonStartQuiz = () => {
  
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
        onClick={() => quizContext.dispatch({ type: "solveQuiz" })}
      >
        Start Quiz
      </Button>
      <Modal
        size="sm"
        show={quizContext.state.alert}
        onHide={() => quizContext.dispatch({ type: "hideAlert" })}
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          Set Question and Answer Options. <br />The values must be different.
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ButtonStartQuiz