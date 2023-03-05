import React from "react";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';

const ButtonHelpNav = () => {
  return (
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
  )
}

export default ButtonHelpNav