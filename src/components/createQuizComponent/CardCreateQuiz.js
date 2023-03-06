import React from "react";
import Card from "react-bootstrap/Card";
import QuizTitle from "./componentsForCreateQuiz/QuizTitle";
import QuizFile from "./componentsForCreateQuiz/QuizFile";
import ButtonCreateQuiz from "./componentsForCreateQuiz/ButtonCreateQuiz";


const CardCreateQuiz = () => {

  return (
    <>

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>CREATE QUIZ</h2>

      <Card style={{
        width: '100%',
        borderRadius: "15px",
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
        textAlign: 'center',
        marginTop: '25px',
      }}
      >
        <Card.Body><QuizTitle /></Card.Body>
      </Card>

      <Card style={{
        width: '100%',
        borderRadius: "15px",
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
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