import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { QuizContext } from "../App";
import ButtonCreatQuizNav from "./navigationButtons/ButtonCreatQuizNav";
import { Image } from "react-bootstrap";

const UserPage = () => {

  const quizContext = useContext(QuizContext);

  return (
    <Container fluid="md">

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>User Name</h2>
      <p style={{ textAlign: "center" }}>Score: {quizContext.state.userScore}</p>

      <ButtonCreatQuizNav />

      <button
        style={{ backgroundColor: '#a2f0f9', borderRadius: '50px', marginTop: '15px' }}>
        <Image fluid
          src={require('./images/storageBW.png')}
          alt={'Storage_icon'}
        />
        <span>CREATED QUIZZES: 0</span>
      </button>

      <button
        style={{ backgroundColor: '#c9a1fb', borderRadius: '50px', marginTop: '15px' }}>
        <Image fluid
          src={require('./images/storageBW.png')}
          alt={'Storage_icon'}
        />
        <span>FEATURED QUIZZES: 0</span>
      </button>

      <button
        style={{ backgroundColor: '#9bf9ab', borderRadius: '50px', marginTop: '15px' }}>
        <Image fluid
          src={require('./images/groupBW.png')}
          alt={'Storage_icon'}
        />
        <span>GROUPS: 0</span> <span>INVITATIONS: 0</span>
      </button>

      <button
        style={{ backgroundColor: '#f9f76d', borderRadius: '50px', marginTop: '15px' }}>
        <Image fluid
          src={require('./images/groupBW.png')}
          alt={'Storage_icon'}
        />
        <span>CREATE GROUP</span>
      </button>

    </Container >
  )
}

export default UserPage