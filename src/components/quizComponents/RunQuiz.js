import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonTaskNumber from "./componentsForQuiz/ButtonTaskNumber";
import ButtonNextTask from "./componentsForQuiz/ButtonNextTask";
import ButtonResult from "./componentsForQuiz/ButtonResult";
import ButtonAnotherQuiz from "./componentsForAdjustQuiz/ButtonAnotherQuiz";
import { QuizContext } from "../../App";

const RunQuiz = () => {

  const quizContext = useContext(QuizContext);

  return (
    <>

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>{quizContext.state.quizTitle}</h2>
      <p style={{ textAlign: "center" }}>{quizContext.state.numOfTasks} tasks</p>


      <div style={{marginTop: '32px'}}>
        {quizContext.state.taskStatus === "taskNumber" ?
          <p style={{ fontSize: "1.2rem" }}>Task {quizContext.state.taskNumber}</p>
          : quizContext.state.taskStatus === "nextTask" ?
            <ButtonNextTask />
            : quizContext.state.taskStatus === "quizResult" ?
              <ButtonResult />
              : null}
      </div>

      <Card style={{
        width: '100%',
        borderRadius: "5px",
        paddingTop: "25px",
        paddingBottom: "25px",
        background: 'linear-gradient(#bfb096, #e8dcbf, #fef6e5, #e8dcbf, #bfb096)',
        textAlign: 'center',
        marginTop: '15px',
        fontWeight: '600'
      }}
      >
        {quizContext.state.renderQuestion}
      </Card>

      {quizContext.state.renderAnswers.map((el, i) => (

        <button
          key={el.id}
          className={`btn-answer ${el.isGivenAnswer}`}
          onClick={() => {
            return quizContext.dispatch({ type: "gues", i })
          }}
        >
          {el.value}
        </button>

      )
      )}

      <Card style={{
        width: '100%',
        border: "none",
        textAlign: 'center',
        marginTop: '30px',
      }}>
        <ButtonAnotherQuiz />
      </Card>





    </ >
  )
}

export default RunQuiz