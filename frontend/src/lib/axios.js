
import axios from 'axios'

const BASE_URL = import.meta.env.MODE === 'development' ? 'http://localhost:3000/api' : '/api';
const api = axios.create({
    baseURL: 'https://lead-desk-1.onrender.com'
})

export default api;
