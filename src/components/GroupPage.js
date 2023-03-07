import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { QuizContext } from "../App";

const GroupPage = () => {
  const quizContext = useContext(QuizContext);

  return (
    <>

      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Group Name</h2>

      <Card style={{
        background: 'linear-gradient(#c7bba5, #fcf5e4, #fefbf5, #fcf5e4, #c7bba5)',
        textAlign: 'center',
        padding: '2%',
        marginTop: '65px',
        borderRadius: '50px',
        color: 'black',
        cursor: 'pointer'
      }}
      >
        Quizzes: 0
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
        Members: 0
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
        Invitations
      </Card>

    </>
  )
}

export default GroupPage