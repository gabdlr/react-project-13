import React from 'react';
import { Col } from 'react-bootstrap';

const MainSkillsItem = (props) => {
    const {title} = props;
    return ( 
            <Col className="p-3 text-white main-desc">
            <p className="ps-4 ms-3 fw-bolder fs-4"><span>{title}</span></p>
            <hr className="mb-0 my-1"/>
            </Col> 
     );
}
 
export default MainSkillsItem;