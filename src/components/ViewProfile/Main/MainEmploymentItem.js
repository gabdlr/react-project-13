import React from 'react';
import { Col, Card } from 'react-bootstrap';
import useDateBeautifier from '../../../hooks/useDateBeautifier';
const MainEmploymentItem = (props) => {
    const {role, company, period_start, period_end } = props;
    return ( 
        <Card.Body>
            <Col className="p-3 ps-5 text-white main-desc">
            <p>Position: <span className="fw-bold"> {role}</span></p>
            <p>Company: <span className="fw-bold"> {company}</span></p>
            <p>Start Date: <span className="fw-bold"> {useDateBeautifier(period_start)}</span></p>
            <p>Finish Date: <span className="fw-bold">{useDateBeautifier(period_end)}</span></p>
            </Col> 
         </Card.Body>
     );
}
 
export default MainEmploymentItem;