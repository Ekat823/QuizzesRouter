import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { QuizContext } from "../../../App";

const ButtonCreateQuiz = () => {

  const quizContext = useContext(QuizContext)

  return (
    <>
      <Button
        variant="light"
        size="sm"
        style={{
          marginTop: "15px",
          marginBottom: "15px",
        }}
        onClick={() => quizContext.dispatch({ type: "submitQuiz" })}
      >
        Create Quiz
      </Button>

      <Modal
        size="sm"
        show={quizContext.state.alert}
        onHide={() => quizContext.dispatch({ type: "hideAlert" })}
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          Fill in the title area <br />and upload a valid .xlsx file.
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ButtonCreateQuiz