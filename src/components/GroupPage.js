import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { QuizContext } from "../App";

const GroupPage = () => {
  const quizContext = useContext(QuizContext);

  return (
    <Container>

      <Card style={{
        maxWidth: "350px",
        maxHeight: "550px",
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
              marginTop: "-10px",

            }}
          >
            Group Name
          </Card.Body>
        </Card.ImgOverlay>

        <Card.Body>
          <ListGroup>

            <ListGroup.Item
              style={{
                border: "1px solid white",
                backgroundColor: "#002b37",
                borderRadius: "7px",
                color: "white",
                marginTop: "1px",
                marginBottom: "1px"
              }}
              action
            >
              Quizzes 0
            </ListGroup.Item>

            <ListGroup.Item
              style={{
                border: "1px solid white",
                backgroundColor: "#002b37",
                borderRadius: "7px",
                color: "white",
                marginTop: "1px",
                marginBottom: "1px"
              }}
              action
            >
              Members 0
            </ListGroup.Item>

            <ListGroup.Item
              style={{
                border: "1px solid white",
                backgroundColor: "#002b37",
                borderRadius: "7px",
                color: "white",
                marginTop: "1px",
                marginBottom: "1px"
              }}
              action
            >
              Invitations
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container >
  )
}

export default GroupPage