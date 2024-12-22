import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: '',
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response, // Pass through if the response is successful
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirect to login page on 401
      const navigate = useNavigate(); 
      navigate('/login'); // Redirect to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
