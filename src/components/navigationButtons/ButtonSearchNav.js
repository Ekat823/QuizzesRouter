import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ButtonSearchNav = () => {
  return (
    <Link to="/search" style={{ textDecoration: 'none' }}>
      <Card style={{
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
        textAlign: 'center',
        padding: '2%',
        marginTop: '15px',
        borderRadius: '50px',
        color: 'black'
      }}
      >
        SEARCH
      </Card>
    </Link>
  )
}

export default ButtonSearchNav