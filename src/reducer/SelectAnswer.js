const selectAnswer = (state, action) => {
    const answer = action.payload;
    return { ...state, answer: answer };
}

export default selectAnswer