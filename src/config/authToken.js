import axiosClient from "./axiosClient"

const authToken = token => {
    if(token){
        //Add the token to the request headers
        axiosClient.defaults.headers.common['x-auth-token'] = token;
    } else {
        //Clean the header
        delete axiosClient.defaults.headers.common['x-auth-token'];
    }
}

export default authToken;