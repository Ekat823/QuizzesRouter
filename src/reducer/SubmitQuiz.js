const submitQuiz = (state) => {
  if (state.quizTitle === "" || state.userFile === [] || state.quizOptions === [] || state.quizOptions.length < 2 || state.userFile.length < 8) {
    return { ...state, alert: true }
  } else {
    return { ...state, quizStatus: "create: adjust" }
  }
}

export default submitQuiz