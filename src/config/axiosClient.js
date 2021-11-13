import axios from "axios";

const axiosClient = axios.create({
    //http://localhost:4000/
    baseURL: 'https://gabresumeapp.herokuapp.com/'
});

export default axiosClient;