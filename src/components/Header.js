import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
const Header = (props) => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const logUserOut = () => {
        dispatch(logout());
    };
    return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" className="navbar-shadow">
    <Container fluid="xl">
        <Navbar.Brand>Welcome, {user.data.name} </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            { user.auth === true ? (
                <Nav>
                {props.Home ? (<Nav.Link href="/">Home</Nav.Link>) : null }
                {props.EditProfile ? (<Nav.Link href="/">Home</Nav.Link>) : null }
                {props.EditProfile ? (<Nav.Link href={`/ViewProfile/${user.data._id}`}>My Profile</Nav.Link>) : null}
                {props.EditProfile ? null : (<Nav.Link href="/Users/EditProfile">Edit Profile</Nav.Link>) }        
                <Nav.Link onClick={logUserOut}>Logout</Nav.Link>
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