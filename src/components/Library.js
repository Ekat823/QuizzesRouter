import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { QuizContext } from "../App";

const Library = () => {

  const quizContext = useContext(QuizContext);

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Quiz Library</h2>

      <Card style={{
        width: "100%",
        maxHeight: "550px",
        border: "none",
      }}
      >

        <Card.Body style={{ overflowX: "hidden" }}>
          <ListGroup>

            {quizContext.state.categories.sort().map((el, i) => (
              <ListGroup.Item
                style={{
                  background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
                  textAlign: 'center',
                  marginTop: '1%',
                  borderRadius: '50px',
                  color: 'black'
                }}
                key={i}
                action
              >
                {el}
              </ListGroup.Item>
            )
            )}
          </ListGroup>
        </Card.Body>
      </Card>
    </ >
  )
}

export default Library