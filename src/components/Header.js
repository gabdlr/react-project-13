import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav, Container } from 'react-bootstrap';
const Header = () => {
    const user = useSelector(state => state.user);
    return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Welcome, {user.data.name} {user.data.lastname}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        { user.auth === true ? (
            <Nav>
            <Nav.Link href="#!">Edit Profile</Nav.Link>
            <Nav.Link href="#!">Logout</Nav.Link>
            </Nav>
        ) :
        (
            <Nav>
            <Nav.Link href="/Users">Login</Nav.Link>
            <Nav.Link href="/Users/Register">Sign Up</Nav.Link>
            </Nav>
        )}
    </Navbar.Collapse>
    </Container>
    </Navbar>
     );
}
 
export default Header;