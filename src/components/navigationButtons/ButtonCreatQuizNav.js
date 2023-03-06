import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ButtonCreatQuizNav = () => {
  return (
    <Link to="/create_quiz" style={{ textDecoration: 'none' }}>
      <Card style={{
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
        textAlign: 'center',
        padding: '2%',
        marginTop: '35px',
        borderRadius: '50px',
        color: 'black'
      }}
      >
        CREATE QUIZ
      </Card>
    </Link>
  )
}

export default ButtonCreatQuizNav