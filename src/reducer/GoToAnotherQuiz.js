const goToAnotherQuiz = (state) => {
    return {...state, create: false, quizTitle: "", quizStatus: "initial"}
}

export default goToAnotherQuiz