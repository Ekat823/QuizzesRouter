import React from "react";
import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const UserPage = () => {

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
            User Name
          </Card.Body>
        </Card.ImgOverlay>

        <Card.Body>
          <ListGroup>

            <ListGroup.Item
              style={{
                backgroundColor: "#081737",
                color: "white",
                border: "2px solid white",
                marginTop: "2px",
                marginBottom: "2px"
              }}
            >
              Created Public Quizzes: 0
              <br />
              Taken Quizzes: 0
            </ListGroup.Item>


            <ListGroup.Item
              style={{
                backgroundColor: "#081737",
                color: "white",
                border: "2px solid white"
              }}
            >
              <Dropdown>
                <Dropdown.Toggle variant="light"
                  style={{
                    marginTop: "12px",
                    marginBottom: "12px"
                  }}>
                  Private Quizzes
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ maxHeight: "120px", overflowX: "hidden" }}>
                  <Dropdown.Item>Quiz 1</Dropdown.Item>
                  <Dropdown.Item>Quiz 2</Dropdown.Item>
                  <Dropdown.Item>Quiz 3</Dropdown.Item>
                  <Dropdown.Item>Quiz 4</Dropdown.Item>
                  <Dropdown.Item>Quiz 5</Dropdown.Item>
                  <Dropdown.Item>Quiz 6</Dropdown.Item>
                  <Dropdown.Item>Quiz 7</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </ListGroup.Item>

            <ListGroup.Item
              style={{
                backgroundColor: "#081737",
                color: "white",
                border: "2px solid white"
              }}
            >
              <Dropdown>
                <Dropdown.Toggle variant="light"
                  style={{
                    marginTop: "12px",
                    marginBottom: "12px"
                  }}>
                  Stored Quizzes
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ maxHeight: "120px", overflowX: "hidden" }}>
                  <Dropdown.Item>Quiz 1</Dropdown.Item>
                  <Dropdown.Item>Quiz 2</Dropdown.Item>
                  <Dropdown.Item>Quiz 3</Dropdown.Item>
                  <Dropdown.Item>Quiz 4</Dropdown.Item>
                  <Dropdown.Item>Quiz 5</Dropdown.Item>
                  <Dropdown.Item>Quiz 6</Dropdown.Item>
                  <Dropdown.Item>Quiz 7</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </ListGroup.Item>

            <ListGroup.Item
              style={{
                backgroundColor: "#081737",
                color: "white",
                border: "2px solid white"
              }}
            >
              <Dropdown>
                <Dropdown.Toggle variant="light"
                  style={{
                    marginTop: "12px",
                    marginBottom: "12px"
                  }}>
                  Created Public Quizzes
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ maxHeight: "120px", overflowX: "hidden" }}>
                  <Dropdown.Item>Quiz 1</Dropdown.Item>
                  <Dropdown.Item>Quiz 2</Dropdown.Item>
                  <Dropdown.Item>Quiz 3</Dropdown.Item>
                  <Dropdown.Item>Quiz 4</Dropdown.Item>
                  <Dropdown.Item>Quiz 5</Dropdown.Item>
                  <Dropdown.Item>Quiz 6</Dropdown.Item>
                  <Dropdown.Item>Quiz 7</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ListGroup.Item>

            <ListGroup.Item
              style={{
                backgroundColor: "#081737",
                color: "white",
                border: "2px solid white"
              }}
            >
              <Dropdown>
                <Dropdown.Toggle variant="light"
                  style={{
                    marginTop: "12px",
                    marginBottom: "12px"
                  }}>
                  Groups
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ maxHeight: "120px", overflowX: "hidden" }}>
                  <Dropdown.Item>Create a Group</Dropdown.Item>
                  <Dropdown.Item>Group 1</Dropdown.Item>
                  <Dropdown.Item>Group 2</Dropdown.Item>
                  <Dropdown.Item>Group 3</Dropdown.Item>
                  <Dropdown.Item>Group 4</Dropdown.Item>
                  <Dropdown.Item>Group 5</Dropdown.Item>
                  <Dropdown.Item>Group 6</Dropdown.Item>
                  <Dropdown.Item>Group 7</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>


              {/*<Modal
                    size="sm"
                    show={alert}
                    onHide={handleHideAlert}
                    centered
                  >
                    <Modal.Header closeButton />
                    <Modal.Body>
                      Set Question and Answer Options. <br />The values must be different.
                    </Modal.Body>
                  </Modal>*/}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container >
  )
}

export default UserPage