import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { QuizContext } from "../../../App";

const ButtonSignUpStartPage = () => {

  const quizContext = useContext(QuizContext)

  return (
    <>
      To get everything <Button
        variant="light"
        size="sm"
        style={{
          padding: "0px 5px 0px 5px",
          marginTop: "5px",
          marginBottom: "5px",
          marginLeft: "10px"
        }}
        onClick={() => quizContext.dispatch({ type: "signUp" })}
      >
        Sign Up
      </Button>
    </>
  )
}

export default ButtonSignUpStartPage