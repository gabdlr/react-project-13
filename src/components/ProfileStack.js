import React,{ useEffect } from 'react';
import { Col } from "react-bootstrap";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { userStackInfo } from "./../actions/userActions";
import ProfileStackSingle from './ProfileStackSingle';
const ProfileStack = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        const loadStack = () => dispatch(userStackInfo());
        loadStack();        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const stack = useSelector(state => state.user.stack);
    return (
        <Col>
            <h5 className="text-light">Proficency</h5>
            {stack.map(technology =>
                <ProfileStackSingle
                    key={technology.id}
                    technology={technology.technology}
                    expertise={technology.expertise}
                />
            )}
            <hr className="divisor" />
        </Col>
     );
}
 
export default ProfileStack;