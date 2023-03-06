import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import getUserFile from "../../../reducer/GetUserFile";
import { QuizContext } from "../../../App";


const QuizFile = () => {

  const quizContext = useContext(QuizContext)

  return (
    <>
      <Form.Label>Prepare xlsx file <Badge
        bg="light"
        style={{
          color: "black",
          fontWeight: "normal",
          border: "1px solid gray",
          padding: "1px 3px 3px 3px",
          cursor: "pointer",
        }}> Example </Badge> <br />Upload it
      </Form.Label>
      <Form.Control
        type="file"
        style={{

          border: "1px solid black",
        }}
        onChange={(e) => getUserFile(e.target.files[0], quizContext.dispatch, quizContext.state)}
      />
    </>
  )
}

export default QuizFile
