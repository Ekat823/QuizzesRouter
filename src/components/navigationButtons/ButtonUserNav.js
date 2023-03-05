import React from "react";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';

const ButtonUserNav = () => {
  return (
    <Link to="/user" style={{ textDecoration: 'none' }}>
      <button
        style={{ backgroundColor: '#a2f0f9', borderRadius: '50px', marginTop: '15px' }}>
        <Image fluid
          src={require('../images/userBW.png')}
          alt={'User_icon'}
        />
        <span>LOG IN / SIGN UP</span>
      </button>
    </Link>
  )
}

export default ButtonUserNav