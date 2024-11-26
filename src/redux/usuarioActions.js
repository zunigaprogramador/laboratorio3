// acá se hacen cada una de las acciones del usuario

import IAX from '../api/axiosConfig';
import iAX from '../api/axiosConfig';
import { setUsuario, setUsuarios, setToken, setUsuarioDetalle } from '../redux/reducers';

//para loguearse
export const loginUsuario = (email, password) => async(dispatch) => {
  try{
    const response = await IAX.post('/login', {email, password});
    const token = response.data.token;
    localStorage.setItem('token', token);
    dispatch(setToken, (token));
} catch (error){
    console.error('error durante el login:', error);
    throw error;
}
};
//para crea el usuario
export const crearUsuario = (name, job) => async (dispatch) => {
    try {
        const response = await iAX.post('/users', { name, job });
        dispatch(setUsuario(response.data));
        return response.data.id; // Retorna el ID del usuario creado
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        throw error;
    }
};
export const obtenerUsuarios = () => async (dispatch) => {
    try {
        const response = await iAX.get('/users');
        dispatch(setUsuarios(response.data.data));
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw error;
    }
};
export const obtenerUsuarioPorId = (id) => async (dispatch) => {
    try {
        const response = await iAX.get(`/users/${id}`);
        dispatch(setUsuarioDetalle(response.data.data));
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        throw error;
    }
};


