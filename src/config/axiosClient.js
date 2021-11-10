import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://gabresumeapp.herokuapp.com/'
});

export default axiosClient;