import React, {useContext} from "react";
import Form from "react-bootstrap/Form";
import { QuizContext } from "../../../App";

const SelectQuestion = () => {
  
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
          type: "selectQuestion", 
          payload: e.target.value 
        })}
      >
        {quizContext.state.selectQuestion.map((el, i) =>
          <option key={i} value={el}>{el}</option>
        )}
      </Form.Select>
    </>
  )
}

export default SelectQuestion