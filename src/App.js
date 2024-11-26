
import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import CrearUsuario from './components/CrearUsuario';
import ListaUsuarios from './components/ListaUsuarios';

const App = () => {
    const token = useSelector((state) => state.usuario.token);

    return (
        <div>
            {!token ? (
                <Login />
            ) : (
                <>
                    <CrearUsuario />
                    <ListaUsuarios />
                </>
            )}
        </div>
    );
};

export default App;
