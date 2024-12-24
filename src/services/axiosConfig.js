import axios from 'axios';

// Create an Axios instance with default settings
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080', // Update as needed// Ensure cookies are sent with requests
});


export default axiosInstance;