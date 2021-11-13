import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import EmploymentEntryComponent from './EmploymentEntryComponent';
const EmploymentBodyComponent = () => {
    const { jobs } = useSelector(state => state.view.profile);
    return ( 
        <Card.Body>
            
            <Col className="p-3 text-white main-desc">
                { jobs !== undefined ?
                    jobs.length > 0 ?  
                    (jobs.map(entry => (
                    <EmploymentEntryComponent
                    key= {entry._id}
                    _id = {entry._id}
                    role={entry.role}
                    company={entry.company}
                    period_end={entry.period_end}
                    period_start={entry.period_start}
                    />))) : (<p className="fw-bolder">Seems like you haven't add any employ registry yet, try adding a new one!</p>)
                     : null
                }
            </Col>
        </Card.Body>  
     );
}
 
export default EmploymentBodyComponent;