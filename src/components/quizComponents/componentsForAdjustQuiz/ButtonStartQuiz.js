import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { QuizContext } from "../../../App";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const ButtonStartQuiz = () => {

  const quizContext = useContext(QuizContext)

  return (
    <Container fluid='md'>

      <Card style={{
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
        textAlign: 'center',
        padding: '2%',
        marginTop: '35px',
        borderRadius: '50px',
        cursor: 'pointer'
      }}
        onClick={() => quizContext.dispatch({ type: "solveQuiz" })}
      >
        Start Quiz
      </Card>

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
    </Container>
  )
}

export default ButtonStartQuiz