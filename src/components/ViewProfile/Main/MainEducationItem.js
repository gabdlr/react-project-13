import React from 'react';
import { Col, Card } from 'react-bootstrap';
import useDateBeautifier from '../../../hooks/useDateBeautifier';
const MainEducationItem = (props) => {

    const { institution, degree, state, period_start, period_end } = props;
    return ( 
        <Card.Body>
        <Col className="p-3 ps-5 text-white main-desc">
        <p>Institution:<span className="fw-bold"> {institution}</span></p>
        <p>Degree: <span className="fw-bold">{degree}</span></p>
        <p>Status: <span className="fw-bold">{state}</span></p>
        <p>Start Date: <span className="fw-bold">{useDateBeautifier(period_start)}</span></p>
        <p>Finish Date: <span className="fw-bold">{useDateBeautifier(period_end)}</span></p>
        </Col> 
     </Card.Body>
     );
}
 
export default MainEducationItem;