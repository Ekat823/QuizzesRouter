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
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
        textAlign: 'center',
        padding: '4%',
        marginTop: '35px',
        borderRadius: '50px',
        cursor: 'pointer'
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