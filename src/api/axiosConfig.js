
import axios from 'axios';

//Configuración de Axios con Interceptores
const IAX = axios.create({
    baseURL: 'https://reqres.in/api',
    headers:{
        'Content-Type': 'application/Json'
    }
});
// Interceptor para añadir el token a las peticiones
IAX.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.request(error);
    }
);
export default IAX;