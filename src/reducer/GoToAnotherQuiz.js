const goToAnotherQuiz = (state) => {
  return {
    ...state,
    create: false,
    quizTitle: "",
    quizStatus: "initial",
    selectQuestion: ["- Select Question Option -"],
    selectAnswer: ["- Select Answer Option -"],
    initialSelectQuestionOption: "- Select Question Option -",
    initialSelectAnswerOption: "- Select Answer Option -",
    question: "- Select Question Option -",
    answer: "- Select Answer Option -",
  }
}

export default goToAnotherQuiz