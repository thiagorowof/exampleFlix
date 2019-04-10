import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import logo from '../assets/img/logo.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import MdHome from 'react-ionicons/lib/MdHome'
import SearchBar from "./SearchBar";
import ImgLogo from "./styled-components/image";



class AppHeader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem('user')),
    });
  }
  
  render() {
    const { user } = this.state;
    if (!user) {
      return (

        <Navbar collapseOnSelect expand="lg" className="header headerNav">
          <Navbar.Brand>
            <ImgLogo alt="" src={logo} className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/"> Inicio</NavLink>
              <NavLink to="/About">Sobre o Sanarflix</NavLink>
              <NavLink to="/Questions"> Perguntas frequentes</NavLink>
            </Nav>
            <Nav className="mr-auto mr-auto-search">
              <SearchBar/>
              <NavLink className="mr-auto-login" to="/Login">Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      );
    } else {
      return (
        <Navbar collapseOnSelect expand="lg" className="header headerNav">
          <Navbar.Brand>
            <img alt="" src={logo} className="d-inline-block align-top imgLogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/"> Inicio</NavLink>
              <NavLink to="/About">Sobre o Sanarflix</NavLink>
              <NavLink to="/Questions"> Perguntas frequentes</NavLink>
            </Nav>
            <Nav className="mr-auto mr-auto-search">
              <SearchBar/>
              <NavLink className="mr-auto-login" to="/Logged"> <MdHome color="red" beat={true} /> {user.firstName}</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
}



export default AppHeader;




