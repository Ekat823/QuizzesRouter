import React, { useContext } from "react";
import button from "react-bootstrap/button";
import { QuizContext } from "../../../App";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";


const ButtonAnotherQuiz = () => {

  const quizContext = useContext(QuizContext)

  return (
    <Container fluid='md'>
      <div style={{ alignContent: "center" }}>
        <button
          style={{
            marginTop: "55px",
            background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
            color: 'black',
            border: '1px solid #c7bba5',
            padding: '1% 3% 1% 3%',
            borderRadius: '15px',
            fontSize: '0.8rem'
          }}
          onClick={() => quizContext.dispatch({ type: "goToAnotherQuiz" })}
        >
          Create Another Quiz
        </button>
        <Link to="/quiz_library" style={{ textDecoration: 'none' }}><button
          style={{
            marginTop: "55px",
            marginLeft: "25px",
            background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
            color: 'black',
            border: '1px solid #c7bba5',
            padding: '1% 3% 1% 3%',
            borderRadius: '15px',
            fontSize: '0.8rem'
          }}
          onClick={() => quizContext.dispatch({ type: "goToAnotherQuiz" })}
        >
          Go to Quiz Library
        </button></Link>
      </div>
    </Container>
  )
}

export default ButtonAnotherQuiz