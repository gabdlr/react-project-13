import axios from "axios";

const axiosClient = axios.create({
    //https://gabresumeapp.herokuapp.com/
    baseURL: 'https://gabresumeapp.herokuapp.com/'
});

export default axiosClient;