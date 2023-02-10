import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import SolvedTasks from "./componentsForQuizResult/SolvedTasks";
import ReactionToResult from "./componentsForQuizResult/ReactionToResult";
import ButtonOnceAgain from "./componentsForQuizResult/ButtonOnceAgain";
import ButtonAnotherQuiz from "./componentsForQuizResult/ButtonAnotherQuiz";
import { QuizContext } from "../../App";

const QuizResult = () => {

  const quizContext = useContext(QuizContext)

  return (
    <Container>
      <Card
        style={{
          maxWidth: "350px",
          border: "1px solid black",
          borderRadius: "7px"
        }}
      >
        <Card.Img
          src={require("./header.png")}
          alt="Card image"
          style={{ backgroundColor: "#002b37", borderRadius: "7px 7px 0 0" }}
        />
        <Card.ImgOverlay>
          <Card.Header
            as="h5"
            style={{
              color: "white",
              marginTop: "-10px"
            }}
          >
            {quizContext.state.quizTitle} <br />
            <small><small>{quizContext.state.numOfTasks} tasks</small></small>
          </Card.Header>
        </Card.ImgOverlay>

        <Card.Body>
          <ListGroup>
            <ListGroup.Item
              style={{
                border: "2px solid white",
                backgroundColor: "#002b37",
                color: "white"
              }}
            >
              <SolvedTasks />
            </ListGroup.Item>
            
            <ListGroup.Item
              style={{
                border: "2px solid white",
                backgroundColor: "#002b37",
                color: "white"
              }}
            >
              <ReactionToResult />
            </ListGroup.Item>
            
            <ListGroup.Item
              style={{
                border: "2px solid white",
                backgroundColor: "#002b37",
                color: "white"
              }}
            >
              <Card.Link>
                <ButtonOnceAgain />
              </Card.Link>
             
              <Card.Link>
                <ButtonAnotherQuiz />
              </Card.Link>
            
            </ListGroup.Item>
          
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default QuizResult