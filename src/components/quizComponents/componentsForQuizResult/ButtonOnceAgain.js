import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { QuizContext } from "../../../App";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const ButtonOnceAgain = () => {

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
      onClick={() => quizContext.dispatch({ type: "backToAdjustQuiz" })}
      >
        Once Again
      </Card>

    </Container>
  )
}

export default ButtonOnceAgain