import React, {useContext} from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { QuizContext } from "../../../App";

const QuizTitle = () => {

  const quizContext = useContext(QuizContext)

  return (
    <>
      <Form.Label>
        Provide relevant title for your quiz
      </Form.Label>
      <FloatingLabel
        label="Quiz Title"
        style={{
          color: "gray",
          paddingTop: "15px",
        }}
      >
        <Form.Control
          type="text"
          style={{ border: "1px solid black" }}
          placeholder="Quiz Title"
          onChange={(e) => quizContext.dispatch({ type: "getQuizTitle", payload: e.target.value })}
        />
      </FloatingLabel>
    </>
  )
}

export default QuizTitle