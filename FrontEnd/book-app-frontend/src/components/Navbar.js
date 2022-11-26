import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../bank_logo.png';


const NavigationBar = ()=>{
    return(
        <>
        <img src={logo} width = '250' height = '120' alt = 'img not available' />
        <Navbar bg="light" variant="light">
    <Container>
    <Link to ="/" className = "navbar-brand">Home</Link>

    <Nav className="me-auto">
      <Link to ="/savings" className = "nav-link">Checkings and Savings</Link>
      <Link to ="/schedule" className = "nav-link">Schedule a Meeting</Link>
      <Link to ="/about" className = "nav-link">About</Link>
 
    </Nav>
    </Container>
  </Navbar></>
        
    )
}

export default NavigationBar;