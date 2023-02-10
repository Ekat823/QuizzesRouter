import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar className="justify-content-center" style={{backgroundColor: "#002b37"}}>

        <Navbar.Brand></Navbar.Brand>
        <Nav>
          <NavLink to="/">
            <img
              src={require('./images/home.png')}
              width='50%'
              height='50%'
              alt={'Home_icon'}
            />
          </NavLink>

          <NavLink to="/user">
          <img
              src={require('./images/user.png')}
              width='50%'
              height='50%'
              alt={'User_icon'}
            />
          </NavLink>

          <NavLink to="/group">
          <img
              src={require('./images/group.png')}
              width='50%'
              height='50%'
              alt={'Group_icon'}
            />
          </NavLink>

          <NavLink to="/create_quiz">
          <img
              src={require('./images/create.png')}
              width='50%'
              height='50%'
              alt={'Create_icon'}
            />
          </NavLink>

          <NavLink to="/quiz_library">
          <img
              src={require('./images/storage.png')}
              width='50%'
              height='50%'
              alt={'Storage_icon'}
            />
          </NavLink>

          <NavLink to="/help">
          <img
              src={require('./images/question.png')}
              width='50%'
              height='50%'
              alt={'Question_icon'}
            />
          </NavLink>

          <NavLink to="/search">
          <img
              src={require('./images/search.png')}
              width='50%'
              height='50%'
              alt={'Search_icon'}
            />
          </NavLink>
        </Nav>

      </Navbar>
    </>
  )
}

export default NavBar