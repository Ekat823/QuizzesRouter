import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Library = () => {
  return (
    <Container>

      <Card style={{
        maxWidth: "350px",
        border: "1px solid balck",
        borderRadius: "7px"
      }}
      >
        <Card.Img
          src={require("./header.png")}
          alt="Card image"
          style={{ backgroundColor: "#240101", borderRadius: "7px 7px 0 0"}}
          
        />
        <Card.ImgOverlay>
          <Card.Body
            as="h5"
            style={{
              color: "white",
              marginTop: "-10px"
            }}
          >
            Quiz Library
          </Card.Body>
        </Card.ImgOverlay>

        <Card.Body style={{overflowX: "hidden"}}>
          <ListGroup>

            <ListGroup.Item
              variant="danger"
              style={{
                border: "1px solid white",
                marginTop: "1px",
                marginBottom: "1px"
              }}
              action
            >
              Quiz 1
            </ListGroup.Item>
            <ListGroup.Item
              variant="danger"
              style={{
                border: "1px solid white",
                marginTop: "1px",
                marginBottom: "1px"
              }}
              action
            >
              Quiz 2
            </ListGroup.Item>
            <ListGroup.Item
               variant="danger"
               style={{
                 border: "1px solid white",
                 marginTop: "1px",
                 marginBottom: "1px"
               }}
               action
            >
              Quiz 3
            </ListGroup.Item>
            <ListGroup.Item
              variant="danger"
              style={{
                border: "1px solid white",
                marginTop: "1px",
                marginBottom: "1px"
              }}
              action
            >
              Quiz 4
            </ListGroup.Item>
            <ListGroup.Item
               variant="danger"
               style={{
                 border: "1px solid white",
                 marginTop: "1px",
                 marginBottom: "1px"
               }}
               action
            >
              Quiz 5
            </ListGroup.Item>
            <ListGroup.Item
              variant="danger"
              style={{
                border: "1px solid white",
                marginTop: "1px",
                marginBottom: "1px"
              }}
              action
            >
              Quiz 6
            </ListGroup.Item>
            <ListGroup.Item
               variant="danger"
               style={{
                 border: "1px solid white",
                 marginTop: "1px",
                 marginBottom: "1px"
               }}
               action
            >
              Quiz 7
            </ListGroup.Item>
            <ListGroup.Item
               variant="danger"
               style={{
                 border: "1px solid white",
                 marginTop: "1px",
                 marginBottom: "1px"
               }}
               action
            >
              Quiz 8
            </ListGroup.Item>
            <ListGroup.Item
               variant="danger"
               style={{
                 border: "1px solid white",
                 marginTop: "1px",
                 marginBottom: "1px"
               }}
               action
            >
              Quiz 9
            </ListGroup.Item>
            <ListGroup.Item
               variant="danger"
               style={{
                 border: "1px solid white",
                 marginTop: "1px",
                 marginBottom: "1px"
               }}
               action
            >
              Quiz 10
            </ListGroup.Item>
            <ListGroup.Item
               variant="danger"
               style={{
                 border: "1px solid white",
                 marginTop: "1px",
                 marginBottom: "1px"
               }}
               action
            >
              Quiz 11
            </ListGroup.Item>
            <ListGroup.Item
               variant="danger"
               style={{
                 border: "1px solid white",
                 marginTop: "1px",
                 marginBottom: "1px"
               }}
               action
            >
              Quiz 12
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container >
  )
}

export default Library