import React from 'react';
import { Card, Row } from 'react-bootstrap';
import MainToolsItem from './MainToolsItem';
//Redux
import { useSelector } from "react-redux";


const MainToolsSection = () => {

    const tools = useSelector(state => state.view.profile.tools);

    return ( 
        <Card id="tools" className="bg-card mt-5">
        <Card.Header><h2 className="my-0 text-white">Dev. Tools</h2></Card.Header>
        <Card.Body>
            <Row className="ps-sm-5 justify-content-center justify-content-sm-start">
                {tools.map(tool =>
                    <MainToolsItem
                    key={tool.id}
                    technology={tool.technology}
                    img_url={tool.img_url}
                    />
                )}
            </Row>
        </Card.Body>
        </Card>
     );
}
 
export default MainToolsSection;
