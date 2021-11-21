import axios from "axios";

const axiosClient = axios.create({
    //https://gabresumeapp.herokuapp.com/ http://localhost:4000/
    baseURL: 'https://pretty-relieved-rate.glitch.me/'
});

export default axiosClient;