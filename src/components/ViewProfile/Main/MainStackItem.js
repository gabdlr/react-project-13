import React from 'react';
import { Col } from 'react-bootstrap';
const MainStackItem = (props) => {
    const { technology, img_url } = props;
    return ( 
        <Col xs={5} sm={3} md={2} className="text-center single-stack p-3 m-2">
            <img className="stack-img" src={img_url} title={technology} alt={technology} />
        </Col>
     );
}
 
export default MainStackItem;