

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    usuario: null,
    usuarios: [],
    token: null,
    usuarioDetalle: null
};

const usuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {
        setUsuario: (state, action) => {
            state.usuario = action.payload;
        },
        setUsuarios: (state, action) => {
            state.usuarios = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUsuarioDetalle: (state, action) => {
            state.usuarioDetalle = action.payload;
        }
    }
});

export const { setUsuario, setUsuarios, setToken, setUsuarioDetalle } = usuarioSlice.actions;
export default usuarioSlice.reducer;
