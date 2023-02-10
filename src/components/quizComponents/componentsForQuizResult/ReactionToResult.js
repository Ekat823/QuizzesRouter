import React, { useContext } from "react";
import { QuizContext } from "../../../App";

const ReactionToResult = () => {

  const quizContext = useContext(QuizContext)

  return (
    <>
      <h3
        style={{
          marginTop: "15px",
          marginBottom: "15px"
        }}
      >
        {quizContext.state.averageScore / quizContext.state.taskNumber === 1 ? 
        "Awesome!!!"
          : quizContext.state.averageScore / quizContext.state.taskNumber < 1 && quizContext.state.averageScore / quizContext.state.taskNumber >= 0.8 ? 
          "Very Good!"
            : quizContext.state.averageScore / quizContext.state.taskNumber < 0.8 && quizContext.state.averageScore / quizContext.state.taskNumber >= 0.6 ? 
            "Not Bad!"
              : "Keep Practicing!"
        }
      </h3>
    </>
  )
}

export default ReactionToResult