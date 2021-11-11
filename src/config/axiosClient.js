import axios from "axios";

const axiosClient = axios.create({
    //https://gabresumeapp.herokuapp.com/
    baseURL: 'http://localhost:4000/'
});

export default axiosClient;