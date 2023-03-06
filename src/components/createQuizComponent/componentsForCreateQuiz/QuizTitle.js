import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import { QuizContext } from "../../../App";

const QuizTitle = () => {

  const quizContext = useContext(QuizContext)

  return (
    <>
      <Form.Label>
        Provide relevant title for your quiz
      </Form.Label>
      
        <Form.Control
          type="text"
          style={{ color: "gray", textAlign: 'center' }}
          placeholder="Quiz Title"
          onChange={(e) => quizContext.dispatch({ type: "getQuizTitle", payload: e.target.value })}
        />
    </>
  )
}

export default QuizTitle