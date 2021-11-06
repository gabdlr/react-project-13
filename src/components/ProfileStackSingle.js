import React from 'react';
import { ProgressBar, Row, Col } from 'react-bootstrap';
const ProfileStackSingle = (props) => {
    const { technology, expertise } = props;
    return (
        <Row className="p-2">
            <Col md={5}>
                <p className="text-light align-self-center my-0">{technology}</p>
            </Col>
            <Col md={7} className="align-self-center">
                <ProgressBar animated variant="secondary" now={expertise / 10 * 100} />
            </Col>
        </Row>
     );
}
 
export default ProfileStackSingle;
