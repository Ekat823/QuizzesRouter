const getNextTask = (state) => {

  const questionIndex = state.questionIndex;
  const answerIndex = state.answerIndex;
  let taskNumber = state.taskNumber;
  taskNumber = taskNumber + 1;
  const answerOptions = state.answerOptions;
  const tasks = [...answerOptions[taskNumber - 1]];
  const newIndexRightAnswer = Math.floor(Math.random() * 4);
  const renderQuestion = tasks[newIndexRightAnswer][questionIndex].value;
  let renderAnswers = [];

  for (let i = 0; i < tasks.length; i++) {
    renderAnswers.push({ value: tasks[i][answerIndex].value, isGivenAnswer: "", id: i })
  }

  return {
    ...state,
    confirmed: false,
    taskNumber: taskNumber,
    taskStatus: 'taskNumber',
    tasks: tasks,
    renderQuestion: renderQuestion,
    renderAnswers: renderAnswers,
    indexRightAnswer: newIndexRightAnswer,
    score: 0,
  }
}

export default getNextTask