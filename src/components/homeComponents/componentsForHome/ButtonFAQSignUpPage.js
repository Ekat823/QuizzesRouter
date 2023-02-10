import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ButtonFAQSignUpPage = () => {
  return (
    <>
      Detailed information : <Link to="/help">
        <Button
          variant="light"
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "20px"
          }}
        >
          FAQ
        </Button>
      </Link>
    </>
  )
}

export default ButtonFAQSignUpPage