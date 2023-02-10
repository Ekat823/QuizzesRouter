import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import SelectQuestion from "./componentsForAdjustQuiz/SelectQuestion";
import SelectAnswer from "./componentsForAdjustQuiz/SelectAnswer";
import ButtonStartQuiz from "./componentsForAdjustQuiz/ButtonStartQuiz";
import ButtonAnotherQuiz from "./componentsForAdjustQuiz/ButtonAnotherQuiz";
import { QuizContext } from "../../App";

const AdjustQuiz = () => {
  
  const quizContext = useContext(QuizContext)

  return (
    <Container>
      <Card style={{
        maxWidth: "350px",
        border: "2px solid balck",
        borderRadius: "7px"
      }}
      >
        <Card.Img
          src={require("./header.png")}
          alt="Card image"
          style={{ backgroundColor: "#002b37", borderRadius: "7px 7px 0 0" }}
        />
        <Card.ImgOverlay>
          <Card.Body
            as="h5"
            style={{
              color: "white",
              marginTop: "-20px"
            }}
          >
            {quizContext.state.quizTitle} <br />
            <small><small>{quizContext.state.numOfTasks} tasks</small></small>
          </Card.Body>
        </Card.ImgOverlay>

        <Card.Body>
          <ListGroup>
            <ListGroup.Item
              style={{
                backgroundColor: "#002b37",
                color: "white",
                border: "2px solid white"
              }}
            >
              <SelectQuestion />
            </ListGroup.Item>

            <ListGroup.Item
              style={{
                backgroundColor: "#002b37",
                color: "white",
                border: "2px solid white"
              }}
            >
              <SelectAnswer />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: "#002b37",
                color: "white",
                border: "2px solid white"
              }}
            >
              <Card.Link>
                <ButtonStartQuiz />
              </Card.Link>
              <Card.Link>
                <ButtonAnotherQuiz />
              </Card.Link>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container >
  )
}

export default AdjustQuiz