import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { QuizContext } from "../../App";
import FormSingUpSingUpPage from "./componentsForHome/FormSingUpSingUpPage";
import ButtonFAQSignUpPage from "./componentsForHome/ButtonFAQSignUpPage";

const HomeSignUpPage = () => {

  const quizContext = useContext(QuizContext)

  return (
    <Container>

      <Card style={{
        maxWidth: "350px",
        maxHeight: "508px",
        border: "2px solid balck",
        borderRadius: "7px"
      }}
      >
        <Card.Img
          src={require("./header.png")}
          alt="Card image"
          style={{ backgroundColor: "#081737" }}
        />
        <Card.ImgOverlay>
          <Card.Body
            as="h5"
            style={{
              color: "white",
              marginTop: "-10px"
            }}
          >
            Fill in the Form:
          </Card.Body>
        </Card.ImgOverlay>

        <Card.Body>
          <ListGroup>
            <ListGroup.Item
              style={{
                backgroundColor: "#081737",
                color: "white",
                border: "2px solid white"
              }}
            >
              <FormSingUpSingUpPage />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: "#081737",
                color: "white",
                border: "2px solid white"
              }}
            >
              <ButtonFAQSignUpPage />
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container >
  )
}

export default HomeSignUpPage