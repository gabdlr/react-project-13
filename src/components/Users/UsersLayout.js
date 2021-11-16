import React,{ Fragment } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router';
import './users.css';
const UsersLayout = () => {
    return (       
        <Fragment>
        <Navbar expand="lg" bg="dark" variant="dark" className="navbar-shadow mb-0">
            <Container className="justify-content-center">
            <Navbar.Brand href="/">ResumeReactApp</Navbar.Brand>
            </Container>
        </Navbar>
        <Container className="d-flex flex-column user-container">
            <Outlet/>
        </Container>
        </Fragment>);
}
 
export default UsersLayout;