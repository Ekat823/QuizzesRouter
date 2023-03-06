import React, { useReducer } from "react";
import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import reducer from "./reducer/Reducer";
import getInitialState from "./state/GetInitialState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
//import Library from "./components/Library";
import CreateQuiz from "./components/CreateQuiz";
import UserPage from "./components/UserPage";
import GroupPage from "./components/GroupPage";
import Help from "./components/Help";
import Error from "./components/Error";
//import Layout from "./components/Layout";
import LibraryQuiz from "./components/LibraryQuiz";
import Search from "./components/Search";

export const QuizContext = React.createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, getInitialState());

  //console.log('renderAnswers', state.renderAnswers);

  return (
    <QuizContext.Provider value={{ state: state, dispatch: dispatch }}>

      <Container style={{textAlign: 'center'}}>
        <h1 style={{color: '#5e5e5e', fontFamily: 'Lucida Console'}}>QUIZZES</h1>
      </Container>

      <BrowserRouter>
        <nav><NavBar /></nav>
        <Routes>

          <Route index element={
            <Container>
              <Home />
            </Container>
          } />

          <Route path="user" element={
            <Container>
              <UserPage />
            </Container>
          } />

          <Route path="group" element={
            <Container>
              <GroupPage />
            </Container>
          } />


          <Route path="create_quiz" element={
            <Container>
              <CreateQuiz />
            </Container>
          } />

          <Route path="quiz_library" element={
            <Container>
              <LibraryQuiz />
            </Container>
          } />

          <Route path="help" element={
            <Container>
              <Help />
            </Container>
          } />

          <Route path="search" element={
            <Container>
              <Search />
            </Container>
          } />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </QuizContext.Provider >
  );
}

export default App