import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { QuizContext } from "../../../App";
import Card from "react-bootstrap/Card";

const ButtonCreateQuiz = () => {

  const quizContext = useContext(QuizContext)

  return (
    <Container fluid='md'>
      <Card style={{
        borderRadius: "7px",
        background: 'linear-gradient(#bbb2a2, #fcf5e4, #ffffff, #fcf5e4, #bbb2a2)',
        textAlign: 'center',
        padding: '4%',
        marginTop: '35px',
        borderRadius: '50px'
      }}
      onClick={() => quizContext.dispatch({ type: "submitQuiz" })}
      >
        Create Quiz
      </Card>

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
    </Container>
  )
}

export default ButtonCreateQuiz