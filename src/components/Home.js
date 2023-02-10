import React, { useContext } from "react";
import HomeStartPage from "./homeComponents/HomeStartPage";
import HomeSignUpPage from "./homeComponents/HomeSignUpPage";
import { QuizContext } from "../App";

const Home = () => {

  const quizContext = useContext(QuizContext)

  return (
    <>
    {
      quizContext.state.homePageStatus === "sign up" ? <HomeSignUpPage />
      : <HomeStartPage />
    }
      
    </>
  )
}

export default Home