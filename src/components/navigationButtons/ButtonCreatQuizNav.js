import React from "react";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';

const ButtonCreatQuizNav = () => {
  return (
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
  )
}

export default ButtonCreatQuizNav