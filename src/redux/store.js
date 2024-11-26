
import { configureStore } from '@reduxjs/toolkit';
import usuarioReducer from './reducers';

const store = configureStore({
    reducer: {
        usuario: usuarioReducer
    }
});

export default store;

