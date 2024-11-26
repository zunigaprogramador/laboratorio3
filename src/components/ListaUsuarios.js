import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { obtenerUsuarios } from '../redux/usuarioActions';


const ListaUsuarios = () => {
    const dispatch = useDispatch();
    const usuarios = useSelector((state) => state.usuario.usuarios);
    const error = useSelector((state) => state.usuario.error);

    useEffect(() => {
        dispatch(obtenerUsuarios());
      }, [dispatch]);

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            {error && <p>{error}</p>}
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListaUsuarios; 