import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image'

const HomeStartPage = () => {

  return (
    <Container fluid="md">

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Welcome to Quizzes!</h2>
      <p style={{ textAlign: "center" }}>Here you can turn any information into a quiz and easily memorize an overwhelming amount of data in a gamelike way.</p>

      <Link to="/create_quiz">
        <button
          style={{ backgroundColor: '#fab9b9', borderRadius: '50px', marginTop: '55px' }}>
          <Image fluid
            src={require('../images/createBW.png')}
            alt={'Create_icon'}
          />
          <span>CREATE QUIZ</span>
        </button>
      </Link>

      <Link to="/quiz_library">
        <button
          style={{ backgroundColor: '#9bf9ab', borderRadius: '50px', marginTop: '15px' }}>
          <Image fluid
            src={require('../images/storageBW.png')}
            alt={'Storage_icon'}
          />
          <span>QUIZ LIBRARY</span>
        </button>
      </Link>

      <Link to="/user">
        <button
          style={{ backgroundColor: '#a2f0f9', borderRadius: '50px', marginTop: '15px' }}>
          <Image fluid
            src={require('../images/userBW.png')}
            alt={'User_icon'}
          />
          <span>LOG IN / SIGN UP</span>
        </button>
      </Link>

      <Link to="/help">
        <button
          style={{ backgroundColor: '#f9f76d', borderRadius: '50px', marginTop: '15px' }}>
          <Image fluid
            src={require('../images/questionBW.png')}
            alt={'Question_icon'}
          />
          <span>FAQ</span>
        </button>
      </Link>

    </Container >
  )
}

export default HomeStartPage