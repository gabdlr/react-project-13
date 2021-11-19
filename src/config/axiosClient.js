import axios from "axios";

const axiosClient = axios.create({
    //https://gabresumeapp.herokuapp.com/ http://localhost:4000/
    baseURL: 'http://localhost:4000/'
});

export default axiosClient;