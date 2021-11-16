import React,{ useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router';
import { logout } from '../actions/userActions';
const Logout = () => {
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        dispatch(logout());
    });
    Navigate({to:'/'});
    return (<div className="loader"></div>);
}
 
export default Logout;