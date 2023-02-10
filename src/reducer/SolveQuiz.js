import generateAnswers from "./GenerateAnswers";

const solveQuiz = (state) => {
  if (state.question === state.initialSelectQuestionOption || state.answer === state.initialSelectAnswerOption || state.question === state.answer) {
    return { ...state, alert: true };
  } else {
    let newQuizStatus = "";
    const questionIndex = state.quizOptions.indexOf(state.question);
    const answerIndex = state.quizOptions.indexOf(state.answer);
    const taskNumber = 1;
    const answerOptions = generateAnswers(state);
    const tasks = [...answerOptions[taskNumber - 1]]
    const indexRightAnswer = Math.floor(Math.random() * 4);
    const renderQuestion = tasks[indexRightAnswer][questionIndex].value;
    let renderAnswers = [];

    for (let i = 0; i < tasks.length; i++) {
      renderAnswers.push({ value: tasks[i][answerIndex].value, isGivenAnswer: "", id: i })
    }

    if(state.quizStatus === "create: adjust") {
      newQuizStatus = "create: quiz"
    }
    if(state.quizStatus === "user: adjust") {
      newQuizStatus = "user: quiz"
    }
    if(state.quizStatus === "library: adjust") {
      newQuizStatus = "library: quiz"
    }

    return {
      ...state,
      quizStatus: newQuizStatus,
      taskStatus: "taskNumber",
      taskNumber: taskNumber,
      answerOptions: answerOptions,
      questionIndex: questionIndex,
      answerIndex: answerIndex,
      tasks: tasks,
      indexRightAnswer: indexRightAnswer,
      renderQuestion: renderQuestion,
      renderAnswers: renderAnswers,
      score: 0,
      storeScore: [],
      averageScore: 0,
    }
  }
}

export default solveQuiz