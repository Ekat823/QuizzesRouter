import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import SelectQuestion from "./componentsForAdjustQuiz/SelectQuestion";
import SelectAnswer from "./componentsForAdjustQuiz/SelectAnswer";
import ButtonStartQuiz from "./componentsForAdjustQuiz/ButtonStartQuiz";
import ButtonAnotherQuiz from "./componentsForAdjustQuiz/ButtonAnotherQuiz";
import { QuizContext } from "../../App";

const AdjustQuiz = () => {

  const quizContext = useContext(QuizContext)

  return (
    <>

      <h2 style={{ textAlign: "center", marginTop: "40px" }}>{quizContext.state.quizTitle}</h2>
      <p style={{ textAlign: "center" }}>{quizContext.state.numOfTasks} tasks</p>


      <Card style={{
        width: '100%',
        borderRadius: "15px",
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
        textAlign: 'center',
        marginTop: '50px',
      }}
      >
        <Card.Body><SelectQuestion /></Card.Body>
      </Card>

      <Card style={{
        width: '100%',
        borderRadius: "15px",
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
        textAlign: 'center',
        marginTop: '10px',
      }}
      >
        <Card.Body><SelectAnswer /></Card.Body>
      </Card>
      <ButtonStartQuiz />

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

export default AdjustQuiz