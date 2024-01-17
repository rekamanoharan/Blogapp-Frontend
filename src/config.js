import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://blogapp-backend-hl7l.onrender.com",
});
// axiosInstance.defaults.withCredentials = true;
export default axiosInstance;
