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

      <hr style={{marginTop: "60px",}}/>

        <button
          style={{
            marginTop: "15px",
            background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
            color: 'black',
            border: '1px solid #c7bba5',
            padding: '1% 3% 1% 3%',
            borderRadius: '15px',
            fontSize: '0.8rem'
          }}
          onClick={() => quizContext.dispatch({ type: "goToAnotherQuiz" })}
        >
          Create Quiz
        </button>
        <Link to="/quiz_library" style={{ textDecoration: 'none' }}><button
          style={{
            marginTop: "15px",
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
          Quiz Library
        </button></Link>
      </div>
    </Container>
  )
}

export default ButtonAnotherQuiz