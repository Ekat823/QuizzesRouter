import React from "react";
import Container from "react-bootstrap/Container";
import ButtonCreatQuizNav from "./navigationButtons/ButtonCreatQuizNav";
import ButtonQuizLibraryNav from "./navigationButtons/ButtonQuizLibraryNav";
import ButtonUserNav from "./navigationButtons/ButtonUserNav";
import ButtonHelpNav from "./navigationButtons/ButtonHelpNav";

const Home = () => {

  return (
    <Container fluid='md'>

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Welcome to Quizzes!</h2>
      <p style={{ textAlign: "center" }}>Here you can turn any information into a quiz and easily memorize an overwhelming amount of data in a gamelike way.</p>

      <ButtonCreatQuizNav />
      <ButtonQuizLibraryNav />
      <ButtonUserNav />
      <ButtonHelpNav />

    </Container>
  )
}

export default Home