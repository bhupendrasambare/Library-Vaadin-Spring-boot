import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import "../style/home.css"
import React from "react";
import { Nav } from 'react-bootstrap';

function NavbarComponent() {
  
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="sm" className="bg-transparent">
      <Container>
        <Navbar.Brand onClick={()=>navigate("/")} className='fs-4 fw-bold text-light cursor-pointer'>Library Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto fw-bold'>
            <Navbar.Text className='text-light cursor-pointer me-3'
            onClick={()=>navigate("/dashboard")}>
              Dashboard
            </Navbar.Text>
            <Navbar.Text className='text-light cursor-pointer me-3'
            onClick={()=>navigate("/students")}>
              Students
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;