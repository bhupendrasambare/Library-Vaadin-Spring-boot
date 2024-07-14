import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import "../style/home.css"
import React from "react";

function NavbarComponent() {
  
  const navigate = useNavigate();

  return (
    <Navbar className="bg-transparent">
      <Container>
        <Navbar.Brand onClick={()=>navigate("/")} className='fs-4 fw-bold text-light green-underline cursor-pointer'>Library Management</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-light cursor-pointer green-underline'
           onClick={()=>navigate("/dashboard")}>
            Dashboard
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;