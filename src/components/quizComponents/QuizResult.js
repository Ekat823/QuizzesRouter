import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import SolvedTasks from "./componentsForQuizResult/SolvedTasks";
import ReactionToResult from "./componentsForQuizResult/ReactionToResult";
import ButtonOnceAgain from "./componentsForQuizResult/ButtonOnceAgain";
import ButtonAnotherQuiz from "./componentsForAdjustQuiz/ButtonAnotherQuiz";
import { QuizContext } from "../../App";

const QuizResult = () => {

  const quizContext = useContext(QuizContext)

  return (
    <>

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>{quizContext.state.quizTitle}</h2>
      <p style={{ textAlign: "center" }}>{quizContext.state.numOfTasks} tasks</p>

      <Card style={{
        width: '100%',
        borderRadius: "15px",
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
        textAlign: 'center',
        marginTop: '50px',
      }}
      >
        <Card.Body><SolvedTasks /></Card.Body>
      </Card>

      <Card style={{
        width: '100%',
        borderRadius: "15px",
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
        textAlign: 'center',
        marginTop: '10px',
      }}
      >
        <Card.Body><ReactionToResult /></Card.Body>
      </Card>

        <ButtonOnceAgain />

      <Card style={{
        width: '100%',
        border: "none",
        textAlign: 'center',
        marginTop: '30px',
      }}>
        <ButtonAnotherQuiz />
      </Card>
    </>
  )
}

export default QuizResult