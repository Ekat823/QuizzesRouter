import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import QuizTitle from "./componentsForCreateQuiz/QuizTitle";
import QuizFile from "./componentsForCreateQuiz/QuizFile";
import ButtonCreateQuiz from "./componentsForCreateQuiz/ButtonCreateQuiz";


const CardCreateQuiz = () => {

  return (
    <>

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>CREATE QUIZ</h2>

      <Card style={{
        width: '100%',
        borderRadius: "7px",
        background: 'linear-gradient(#bbb2a2, #fcf5e4, #fcf5e4, #ffffff, #fcf5e4, #fcf5e4, #bbb2a2)',
        textAlign: 'center',
        marginTop: '25px',
      }}
      >
        <Card.Body><QuizTitle /></Card.Body>
      </Card>

      <Card style={{
        width: '100%',
        borderRadius: "7px",
        background: 'linear-gradient(#bbb2a2, #fcf5e4, #fcf5e4, #ffffff, #fcf5e4, #fcf5e4, #bbb2a2)',
        textAlign: 'center',
        marginTop: '15px',
      }}
      >
        <Card.Body><QuizFile /></Card.Body>
      </Card>

      <ButtonCreateQuiz />
    </ >
  )
}

export default CardCreateQuiz