import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { QuizContext } from "../../../App";

const FormLogInStartPage = () => {
  
  const quizContext = useContext(QuizContext)

  return (
    <>
      Log in if you already have an account
      <Form>
        <Form.Control type="email" placeholder="Email" style={{ marginBottom: "7px", marginTop: "10px" }} />
        <Form.Control type="password" placeholder="Password" />
        <Link to="user">
          <Button
            variant="light"
            size="sm"
            style={{
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            Log In
          </Button>
        </Link>
      </Form>
    </>
  )
}

export default FormLogInStartPage