import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/es/Button";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <Navbar fixed={'top'} bg="light" variant="light">
      <Navbar.Brand href="#home">ERP 后台管理系统</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">Home</Link>
      </Nav>
         <Link to="/login">Login</Link>
    </Navbar>
  );
}

export default Header;