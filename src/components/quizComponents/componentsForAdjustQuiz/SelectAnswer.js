import React, {useContext} from "react";
import Form from "react-bootstrap/Form";
import { QuizContext } from "../../../App";

const SelectAnswer = () => {
  
  const quizContext = useContext(QuizContext)

  return (
    <>
      <Form.Select
        style={{
          marginTop: "25px",
          marginBottom: "25px",
          border: "1px solid black"
        }}
        onChange={(e) => quizContext.dispatch({ 
          type: "selectAnswer", 
          payload: e.target.value 
        })}
      >
        {quizContext.state.selectAnswer.map((el, i) =>
          <option key={i} value={el}>{el}</option>
        )}
      </Form.Select>
    </>
  )
}

export default SelectAnswer