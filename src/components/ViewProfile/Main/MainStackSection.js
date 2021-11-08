import React from 'react';
import { Card, Row } from 'react-bootstrap';
import MainStackItem from './MainStackItem';
//Redux
import { useSelector } from "react-redux";

const MainStackSection = () => {
    const stack = useSelector( state => state.view.profile.stack);
    return ( 
        <Card id="stack" className="bg-card mt-5">
        <Card.Header><h2 className="my-0 text-white">Tech Stack</h2></Card.Header>
        <Card.Body>
            <Row className="ps-sm-5 justify-content-center justify-content-sm-start">
                {stack.map(technology =>
                    <MainStackItem
                    key={technology._id}
                    technology={technology.technology}
                    img_url={technology.img_url}
                    />
                )}
            </Row>
        </Card.Body>
        </Card>
     );
}
 
export default MainStackSection;
