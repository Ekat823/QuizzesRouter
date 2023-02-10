const backToAdjustQuiz = (state) => {

    const selectQuestion = [state.initialSelectQuestionOption, ...state.quizOptions];
    const selectAnswer = [state.initialSelectAnswerOption, ...state.quizOptions];

    let newQuizStatus = "";

    if(state.quizStatus === "create: result") {
      newQuizStatus = "create: adjust"
    }
    if(state.quizStatus === "user: result") {
      newQuizStatus = "user: adjust"
    }
    if(state.quizStatus === "library: result") {
      newQuizStatus = "library: adjust"
    }

    return {
        ...state, 
        quizStatus: newQuizStatus,
        selectQuestion: selectQuestion, 
        selectAnswer: selectAnswer}
}

export default backToAdjustQuiz