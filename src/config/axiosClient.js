import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://react-project-13-server-production.up.railway.app/'
});

export default axiosClient;