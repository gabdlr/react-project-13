import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
const NavBar = () => {
    return ( 
        <Navbar bg="transparent" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
                    <Nav.Link className="fw-bold text-white" href="#education">Education</Nav.Link>
                    <Nav.Link className="fw-bold text-white" href="#employment">Employment</Nav.Link>
                    <Nav.Link className="fw-bold text-white" href="#courses">Certifications</Nav.Link>
                    <Nav.Link className="fw-bold text-white" href="#stack">Stack</Nav.Link>
                    <Nav.Link className="fw-bold text-white" href="#tools">Tools</Nav.Link>
                    <Nav.Link className="fw-bold text-white" href="#hobbies">Hobbies</Nav.Link>
                    <Nav.Link className="fw-bold text-white" href="#!">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavBar;