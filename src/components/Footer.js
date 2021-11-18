import React from 'react';
import {Container, Navbar, Row, Col } from 'react-bootstrap';
import BsPagination from './Utilities/BsPagination';

const Footer = () => {


    return (
        <Navbar bg="dark" variant="dark" className="mt-4 navbar-shadow-footer"> 
        <Container>
            <Row className="w-100">
                <Col md={8} >
                    <BsPagination/>
                </Col>
                <Col md={4} className="d-flex align-items-end">
                    <p className="copyright pt-2 pt-md-0 text-center text-md-end ">
                        Made with <i className="bi bi-heart-fill" style={{color:'red'}}> </i> 
                        by Gabriel De Los Rios in <i className="bi bi-geo-alt" style={{color:'red'}}></i>Argentina for the <i className="bi bi-globe" style={{color:'green'}}></i></p>
                </Col>
            </Row>
        </Container>
        </Navbar>
     );
}
 
export default Footer;