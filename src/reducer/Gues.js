const gues = (state, action) => {
    const num = action.i;
    const indexRightAnswer = state.indexRightAnswer;
    const renderAnswers = state.renderAnswers;
    let score = state.score;
    let storeScore = [...state.storeScore];
    const taskNumber = state.taskNumber;
    const answerOptions = [...state.answerOptions];
    let averageScore = state.averageScore;
    let taskStatus = state.taskStatus;

    if (num !== indexRightAnswer) {
        renderAnswers[num].isGivenAnswer = "wrong-answer";
        score = score - 1;
    } else {
        renderAnswers[num].isGivenAnswer = "right-answer";
        score = score + 5
        storeScore = [...state.storeScore, score];

        if (taskNumber === answerOptions.length) {
            averageScore = storeScore.filter(el => el === 5).length;
            taskStatus = "quizResult";

        } else {
            taskStatus = "nextTask";
        }       
    }

    return {
        ...state,
        score: score,
        storeScore: storeScore,
        averageScore: averageScore,
        taskStatus: taskStatus
    }
}

export default gues