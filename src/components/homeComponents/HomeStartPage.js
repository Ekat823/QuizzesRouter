import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { QuizContext } from "../../App";
import Image from 'react-bootstrap/Image'

const HomeStartPage = () => {

  const quizContext = useContext(QuizContext)

  return (
    <Container fluid="md">

      <h2 style={{textAlign: "center", marginTop: "20px"}}>Welcome to Quizzes!</h2>
      <p style={{textAlign: "center"}}>Here you can turn any information into a quiz and easily memorize an overwhelming amount of data in a gamelike way.</p>

      <button
        style={{ backgroundColor: '#fab9b9', borderRadius: '50px', marginTop: '55px' }}>
        <Image fluid
          src={require('../images/createBW.png')}
          alt={'Create_icon'}
        />
        <span>CREATE QUIZ</span>
      </button>

      <button
        style={{ backgroundColor: '#9bf9ab', borderRadius: '50px', marginTop: '15px' }}>
        <Image fluid
          src={require('../images/storageBW.png')}
          alt={'Storage_icon'}
        />
        <span>QUIZ LIBRARY</span>
      </button>

      <button
        style={{ backgroundColor: '#a2f0f9', borderRadius: '50px', marginTop: '15px' }}>
        <Image fluid
          src={require('../images/userBW.png')}
          alt={'User_icon'}
        />
        <span>LOG IN / SIGN UP</span>
      </button>

      <button
        style={{ backgroundColor: '#f9f76d', borderRadius: '50px', marginTop: '15px' }}>
        <Image fluid
          src={require('../images/questionBW.png')}
          alt={'Question_icon'}
        />
        <span>FAQ</span>
      </button>

    </Container >
  )
}

export default HomeStartPage