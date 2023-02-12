import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { QuizContext } from "../../App";
import ButtonSignUpStartPage from "./componentsForHome/ButtonSignUpStartPage";
import FormLogInStartPage from "./componentsForHome/FormLogInStartPage";

const HomeStartPage = () => {

  const quizContext = useContext(QuizContext)

  return (
    <Container>

      <Card style={{
        maxWidth: "350px",
        border: "2px solid balck",
        borderRadius:  "7px" 
      }}
      >
        <Card.Img
          src={require("./header.png")}
          alt="Card image"
          style={{ backgroundColor: "#002b37", borderRadius:  "7px 7px 0 0"  }}
        />
        <Card.ImgOverlay>
          <Card.Body
            as="h5"
            style={{
              color: "white",
              marginTop: "-20px"
            }}
          >
            <big>Welcome!</big><br />
            <small><small>Give it a try without signing up!</small></small>
          </Card.Body>
        </Card.ImgOverlay>

        <Card.Body>
          <ListGroup>

            <ListGroup.Item
              style={{
                backgroundColor: "#002b37",
                color: "white",
                border: "2px solid white",
                marginTop: "2px",
                marginBottom: "2px"
              }}
            >
              Unauthorized users can take library quizzes and create their own.
            </ListGroup.Item>

            <ListGroup.Item
              style={{
                backgroundColor: "#002b37",
                color: "white",
                border: "2px solid white"
              }}
            >
              Alas, they cannot store selected library quizzes, save the ones they've created, and enjoy the benefits of groups.
            </ListGroup.Item>

            <ListGroup.Item
              style={{
                backgroundColor: "#002b37",
                color: "white",
                border: "2px solid white"
              }}
            >
              <ButtonSignUpStartPage />
            </ListGroup.Item>

            <ListGroup.Item
              style={{
                backgroundColor: "#002b37",
                color: "white",
                border: "2px solid white"
              }}
            >
              <FormLogInStartPage />
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container >
  )
}

export default HomeStartPage