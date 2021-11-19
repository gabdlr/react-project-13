import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ContactForm from '../../ContactForm';


const NavBar = (props) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return ( 
        <Navbar bg="transparent" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
                    {props.myProfile ? <ContactForm show={show} setShow={setShow} /> : null}
                    <Nav.Link className="fw-bold text-white" href="#education">Education</Nav.Link>
                    <Nav.Link className="fw-bold text-white" href="#employment">Employment</Nav.Link>
                    <Nav.Link className="fw-bold text-white" href="#courses">Certifications</Nav.Link>
                    <Nav.Link className="fw-bold text-white" href="#stack">
                        {props.myProfile ? "Stack" : "Skills"}
                    </Nav.Link>
                    {props.myProfile ? 
                    <Nav.Link className="fw-bold text-white" href="#tools">Tools</Nav.Link>
                    : null}
                    <Nav.Link className="fw-bold text-white" href="#hobbies">Hobbies</Nav.Link>
                    {props.myProfile ? 
                    <Nav.Link className="fw-bold text-white" onClick={ () => handleShow() }>Contact</Nav.Link>
                    : null}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavBar;