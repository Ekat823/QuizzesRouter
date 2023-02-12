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
              className='img-navbar'
              alt={'Home_icon'}
            />
          </NavLink>

          <NavLink to="/user">
          <img
              src={require('./images/user.png')}
              className='img-navbar'
              alt={'User_icon'}
            />
          </NavLink>

          <NavLink to="/group">
          <img
              src={require('./images/group.png')}
              className='img-navbar'
              alt={'Group_icon'}
            />
          </NavLink>

          <NavLink to="/create_quiz">
          <img
              src={require('./images/create.png')}
              className='img-navbar'
              alt={'Create_icon'}
            />
          </NavLink>

          <NavLink to="/quiz_library">
          <img
              src={require('./images/storage.png')}
              className='img-navbar'
              alt={'Storage_icon'}
            />
          </NavLink>

          <NavLink to="/help">
          <img
              src={require('./images/question.png')}
              className='img-navbar'
              alt={'Question_icon'}
            />
          </NavLink>

          <NavLink to="/search">
          <img
              src={require('./images/search.png')}
              className='img-navbar'
              alt={'Search_icon'}
            />
          </NavLink>
        </Nav>

      </Navbar>
    </>
  )
}

export default NavBar