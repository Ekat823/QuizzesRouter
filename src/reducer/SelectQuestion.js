const selectQuestion = (state, action) => {
    const question = action.payload;
    return { ...state, question: question };
}

export default selectQuestion