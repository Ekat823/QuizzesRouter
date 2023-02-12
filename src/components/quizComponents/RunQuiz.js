import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonTaskNumber from "./componentsForQuiz/ButtonTaskNumber";
import ButtonNextTask from "./componentsForQuiz/ButtonNextTask";
import ButtonResult from "./componentsForQuiz/ButtonResult";
import ButtonAnotherQuiz from "./componentsForQuiz/ButtonAnotherQuiz";
import { QuizContext } from "../../App";

const RunQuiz = () => {

  const quizContext = useContext(QuizContext);

  return (
    <Container>
      <Card
        style={{
          maxWidth: "350px",
          border: "1px solid black",
          borderRadius: "7px"
        }}>
        <Card.Img
          src={require("./header.png")}
          alt="Card image"
          style={{ backgroundColor: "#002b37", borderRadius: "7px 7px 0 0" }}
        />
        <Card.ImgOverlay>
          <Card.Body as="h5" style={{ color: "white", marginTop: "-20px" }}>
            {quizContext.state.quizTitle} <br />
            <small><small>{quizContext.state.numOfTasks} tasks</small></small>
          </Card.Body>
        </Card.ImgOverlay>

        <Card.Body style={{ textAlign: "left" }}>
          <ListGroup.Item>
            {quizContext.state.taskStatus === "taskNumber" ?
              <ButtonTaskNumber />
              : quizContext.state.taskStatus === "nextTask" ?
                <ButtonNextTask />
                : quizContext.state.taskStatus === "quizResult" ?
                  <ButtonResult />
                  : null}
          </ListGroup.Item>

          <ListGroup.Item
            style={{
              backgroundColor: "#002b37",
              color: "white",
              padding: "15px",
              textAlign: "center"
            }}
          >
            {quizContext.state.renderQuestion}
          </ListGroup.Item>

          {quizContext.state.renderAnswers.map((el, i) => (
            <ListGroup.Item>
              <button
                key={el.id}
                className={`btn-answer ${el.isGivenAnswer}`}
                onClick={() => {
                  return quizContext.dispatch({ type: "gues", i })
                }}
              >
                {el.value}
              </button>
            </ListGroup.Item>
          )
          )}
          <ListGroup.Item style={{ textAlign: "right" }}>
            <ButtonAnotherQuiz />
          </ListGroup.Item>
        </Card.Body>
      </Card>
    </Container >
  )
}

export default RunQuiz