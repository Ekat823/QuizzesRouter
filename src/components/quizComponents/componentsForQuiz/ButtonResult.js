import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { QuizContext } from "../../../App";

const ButtonResult = () => {

  const quizContext = useContext(QuizContext)

  return (
    <>
      <button
        style={{
          background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
          color: 'black',
          border: '1px solid #c7bba5',
          padding: '0.5% 5% 0.5% 5%',
          borderRadius: '15px',
          fontSize: '1rem'
        }}
        onClick={() => quizContext.dispatch({ type: "getResult" })}
      >
        Result
      </button>
    </>
  )
}

export default ButtonResult