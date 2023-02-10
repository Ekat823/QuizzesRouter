const getQuizTitle = (state, action) => {
    const quizTitle = action.payload;
    return {
        ...state,
        quizStatus: "initial",
        quizTitle: quizTitle,
        confirmed: false
    };
}

export default getQuizTitle