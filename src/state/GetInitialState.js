const getInitialState = () => ({
  //------General
  homeStatus: "guest", // "user" "guest" "group" "quiz"
  quizStatus: "initial", //"library: adjust" "adjust", "quiz", "result" user:+ create:+ library:+ 
  alert: false,
  //--------Home
  homePageStatus: "start", // "sign up"
  //-----Create Quiz
  quizTitle: "",
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
  //-----Library
  categories: ['Anatomy', 'Physics', 'Anthropology', 'Astrology', 'Mathematics', 'Astronomy', 'Keyboard Shortcuts', 'Biology', 'Chemistry', 'Fine Art', 'Music', 'Geography', 'Health Care', 'History', 'Languages', 'Literature', 'Psychology'],
  //-----User
  userScore: 0,

})
export default getInitialState