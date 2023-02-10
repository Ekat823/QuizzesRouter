import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { QuizContext } from "../../../App";

const FormSingUpSingUpPage = () => {

  const quizContext = useContext(QuizContext)

  return (
    <>
      <Form>
        <Form.Control type="email" placeholder="User Name" style={{ marginBottom: "20px", marginTop: "30px" }} />
        <Form.Control type="email" placeholder="Email" style={{ marginBottom: "20px", marginTop: "20px" }} />
        <Form.Control type="password" placeholder="Password" />
        <Link to="user">
          <Button
            variant="light"
            style={{
              marginTop: "35px",
              marginBottom: "30px",
            }}
          >
            Sign Up
          </Button>
        </Link>
        <Link to="/">
          <Button
            variant="light"
            style={{
              marginTop: "35px",
              marginBottom: "30px",
              marginLeft: "30px"
            }}
          >
            Cancel
          </Button>
        </Link>
      </Form>
    </>
  )
}

export default FormSingUpSingUpPage