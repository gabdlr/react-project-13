import React from 'react';
import { Col } from "react-bootstrap";
//Redux
import { useSelector } from "react-redux";
import ProfileStackSingle from './ProfileStackSingle';
const ProfileStack = () => {
    const stack = useSelector(state => state.view.profile.stack);
    return (
        <Col>
            <h5 className="text-light">Proficency</h5>
            {stack.map(technology =>
                <ProfileStackSingle
                    key={technology._id}
                    technology={technology.technology}
                    expertise={technology.expertise}
                />
            )}
            <hr className="divisor" />
        </Col>
     );
}
 
export default ProfileStack;