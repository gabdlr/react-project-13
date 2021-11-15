import React from 'react';
import { Navigate } from 'react-router';

const Protected = ({children}) => {
    //Shame code, fix in the future when product is finished
    //Of course I'll never deploy something like this on real prod
    const token= localStorage.getItem('token');
    return( token ? children : <Navigate to="/Users"/> );     
}
 
export default Protected;