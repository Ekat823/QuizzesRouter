const getResult = (state) => {
  let newQuizStatus = "";

  if(state.quizStatus === "create: quiz") {
    newQuizStatus = "create: result"
  }
  if(state.quizStatus === "user: quiz") {
    newQuizStatus = "user: result"
  }
  if(state.quizStatus === "library: quiz") {
    newQuizStatus = "library: result"
  }

  return { ...state, quizStatus: newQuizStatus }
}

export default getResult 