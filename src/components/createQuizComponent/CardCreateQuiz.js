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
      <Card style={{
        width: '100%',
        border: "2px solid balck",
        borderRadius: "7px",
        backgroundColor: '#fab9b9',
        textAlign: 'center',
        fontSize: '1.5rem',
        marginTop: '45px'
      }}
      >
        <Card.Body>CREATE QUIZ</Card.Body>
      </Card>

      <Card style={{
        width: '100%',
        border: "2px solid balck",
        borderRadius: "7px",
        backgroundColor: '#fab9b9',
        textAlign: 'center',
        fontSize: '1.5rem',
        marginTop: '15px'
      }}
      >
        <Card.Body><QuizTitle /></Card.Body>
      </Card>

      <Card style={{
        width: '100%',
        border: "2px solid balck",
        borderRadius: "7px",
        backgroundColor: '#fab9b9',
        textAlign: 'center',
        fontSize: '1.5rem',
        marginTop: '15px'
      }}
      >
        <Card.Body><QuizFile /></Card.Body>
      </Card>

      <Card style={{
        width: '100%',
        border: "2px solid balck",
        borderRadius: "7px",
        backgroundColor: '#fab9b9',
        textAlign: 'center',
        fontSize: '1.5rem',
        marginTop: '15px'
      }}
      >
        <Card.Body><ButtonCreateQuiz /></Card.Body>
      </Card>
    </ >
  )
}

export default CardCreateQuiz