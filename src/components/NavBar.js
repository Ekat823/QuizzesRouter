import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

const NavBar = () => {
  return (

    <Navbar className="justify-content-center" bg="secondary" variant="dark" style={{ padding: "3px" }} >

      <Navbar.Brand ></Navbar.Brand>

      <Nav>
        <NavLink to="/">
          <Image fluid
            src={require('./images/home.png')}
            style={{ padding: "10% 30% 10% 30%" }}
            alt={'Home_icon'}
          />
        </NavLink>

        <NavLink to="/user">
          <Image fluid
            src={require('./images/user.png')}
            style={{ padding: "10% 30% 10% 30%" }}
            alt={'User_icon'}
          />
        </NavLink>

        <NavLink to="/group">
          <Image fluid
            src={require('./images/group.png')}
            style={{ padding: "10% 30% 10% 30%" }}
            alt={'Group_icon'}
          />
        </NavLink>

        <NavLink to="/create_quiz">
          <Image fluid
            src={require('./images/create.png')}
            style={{ padding: "10% 30% 10% 30%" }}
            alt={'Create_icon'}
          />
        </NavLink>

        <NavLink to="/quiz_library">
          <Image fluid
            src={require('./images/storage.png')}
            style={{ padding: "10% 30% 10% 30%" }}
            alt={'Storage_icon'}
          />
        </NavLink>

        <NavLink to="/help">
          <Image fluid
            src={require('./images/question.png')}
            style={{ padding: "10% 30% 10% 30%" }}
            alt={'Question_icon'}
          />
        </NavLink>

        <NavLink to="/search">
          <Image fluid
            src={require('./images/search.png')}
            style={{ padding: "10% 30% 10% 30%" }}
            alt={'Search_icon'}
          />
        </NavLink>
      </Nav>

    </Navbar>

  )
}

export default NavBar