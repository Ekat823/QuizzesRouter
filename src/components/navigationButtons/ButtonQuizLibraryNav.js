import React from "react";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';

const ButtonQuizLibraryNav = () => {
  return (
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
  )
}

export default ButtonQuizLibraryNav