import hideAlert from "./HideAlert";
import getQuizTitle from "./GetQuizTitle";
import submitQuiz from "./SubmitQuiz";
import selectQuestion from "./SelectQuestion";
import selectAnswer from "./SelectAnswer";
import solveQuiz from "./SolveQuiz";
import gues from "./Gues";
import getNextTask from "./GetNextTask";
import getResult from "./GetResult";
import backToAdjustQuiz from "./BackToAdjustQuiz";
import goToAnotherQuiz from "./GoToAnotherQuiz";

const reducer = (state, action) => {

  switch (action.type) {
    case "hideAlert":
      return hideAlert(state)
    case "signUp":
      return {...state, homePageStatus: "sign up"}
    //----------CreateQuiz
    case "getQuizTitle":
      return getQuizTitle(state, action)
    case "getUserFile":
      return {
        ...state,
        quizStatus: "initial",
        userFile: action.userFile,
        quizOptions: action.quizOptions,
        selectQuestion: action.selectQuestion,
        selectAnswer: action.selectAnswer,
        numOfTasks: action.numOfTasks,
        fileName: action.fileName
      }
    case "submitQuiz":
      return submitQuiz(state)
    //----------AdjustQuiz
    case "selectQuestion":
      return selectQuestion(state, action)
    case "selectAnswer":
      return selectAnswer(state, action)
    case "solveQuiz":
      return solveQuiz(state)
    //-----------Quiz
    case "gues":
      return gues(state, action)
    case "getNextTask":
      return getNextTask(state)
    case "getResult":
      return getResult(state)
    //---------QuizRezult
    case "backToAdjustQuiz":
      return backToAdjustQuiz(state)
    case "goToAnotherQuiz":
      return goToAnotherQuiz(state)


    default:
      return state
  }
}

export default reducer