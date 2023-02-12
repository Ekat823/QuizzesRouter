import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import QuizTitle from "./componentsForCreateQuiz/QuizTitle";
import QuizFile from "./componentsForCreateQuiz/QuizFile";
import ButtonCreateQuiz from "./componentsForCreateQuiz/ButtonCreateQuiz";


const CardCreateQuiz = () => {

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
              marginTop: "-10px"
            }}
          >
            Create Quiz
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
              <QuizTitle />
            </ListGroup.Item>

            <ListGroup.Item
              style={{
                backgroundColor: "#002b37",
                color: "white",
                border: "2px solid white"
              }}
            >
              <QuizFile />
            </ListGroup.Item>

            <ListGroup.Item
              style={{
                backgroundColor: "#002b37",
                color: "white",
                border: "2px solid white"
              }}
            >
              <ButtonCreateQuiz />
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container >
  )
}

export default CardCreateQuiz