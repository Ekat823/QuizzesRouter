const goToAnotherQuiz = (state) => {
    return {...state, create: false, quizStatus: "initial"}
}

export default goToAnotherQuiz