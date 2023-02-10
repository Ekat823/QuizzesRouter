import * as XLSX from "xlsx/xlsx.mjs";

const getUserFile = async (file, dispatch, state) => {

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const userFile = XLSX.utils.sheet_to_json(worksheet)
    const getHeaders = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
        defaultValue: "",
    })
    const quizOptions = getHeaders[0];
    const selectQuestion = [state.initialSelectQuestionOption, ...quizOptions];
    const selectAnswer = [state.initialSelectAnswerOption, ...quizOptions];
    const numOfTasks = Math.ceil(userFile.length / 4);
    const fileName = file.name;

    return dispatch({
        type: "getUserFile",
        userFile,
        quizOptions,
        selectQuestion,
        selectAnswer,
        numOfTasks,
        fileName
    })

}

export default getUserFile