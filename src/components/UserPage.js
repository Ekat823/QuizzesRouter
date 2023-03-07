import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../App";
import ButtonCreatQuizNav from "./navigationButtons/ButtonCreatQuizNav";
import Card from "react-bootstrap/Card";

const UserPage = () => {

  const quizContext = useContext(QuizContext);

  return (
    <>

      <h2 style={{ textAlign: "center", marginTop: "40px" }}>User Name</h2>
      <p style={{ textAlign: "center" }}>Score: {quizContext.state.userScore}</p>

      <ButtonCreatQuizNav />

      <Card style={{
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
        textAlign: 'center',
        padding: '2%',
        marginTop: '15px',
        borderRadius: '50px',
        color: 'black',
        cursor: 'pointer'
      }}
      >
        CREATED QUIZZES: 0
      </Card>

      <Card style={{
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
        textAlign: 'center',
        padding: '2%',
        marginTop: '15px',
        borderRadius: '50px',
        color: 'black',
        cursor: 'pointer'
      }}
      >
        FEATURED QUIZZES: 0
      </Card>

      <Link to="/group" style={{ textDecoration: 'none' }}>
        <Card style={{
          background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
          textAlign: 'center',
          padding: '2%',
          marginTop: '15px',
          borderRadius: '50px',
          color: 'black',
          cursor: 'pointer'
        }}
        >
          GROUPS: 0
        </Card>
      </Link>

      <Card style={{
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
        textAlign: 'center',
        padding: '2%',
        marginTop: '15px',
        borderRadius: '50px',
        color: 'black',
        cursor: 'pointer'
      }}
      >
        INVITATIONS: 0
      </Card>

      <Card style={{
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
        textAlign: 'center',
        padding: '2%',
        marginTop: '15px',
        borderRadius: '50px',
        color: 'black',
        cursor: 'pointer'
      }}
      >
        CREATE GROUP
      </Card>

    </ >
  )
}

export default UserPage