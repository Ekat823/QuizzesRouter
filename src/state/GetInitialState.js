const getInitialState = () => ({
  //------General
  homeStatus: "guest", // "user" "guest" "group" "quiz"
  quizStatus: "initial", //"library: adjust" "adjust", "quiz", "result" user:+ create:+ library:+ 
  alert: false,
  //--------Home
  homePageStatus: "start", // "sign up"
  //-----Create Quiz
  quizTitle: "(no quiz yet)",
  userFile: [],
  fileName: "",
  quizOptions: [],
  selectQuestion: ["- Select Question Option -"],
  selectAnswer: ["- Select Answer Option -"],
  numOfTasks: 0,
  //---------Adjust Quiz
  initialSelectQuestionOption: "- Select Question Option -",
  initialSelectAnswerOption: "- Select Answer Option -",
  question: "- Select Question Option -",
  answer: "- Select Answer Option -",
  answerIndex: 0,
  questionIndex: 0,
  answerOptions: [],
  taskStatus: "taskNumber", // "nextTask" "quizResult"
  taskNumber: 1,
  tasks: [],
  indexRightAnswer: 0,
  renderQuestion: "",
  renderAnswers: [],
  score: 0,
  storeScore: [],
  averageScore: 0,
  //-----Quiz
  
})
export default getInitialState