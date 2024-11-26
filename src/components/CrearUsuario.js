import { useState } from "react"
import { useDispatch } from "react-redux";
import { crearUsuario, obtenerUsuarioPorId } from '../redux/usuarioActions';


const CrearUsuario = () =>{
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const dispatch = useDispatch();

    const handleCreateUser= async()=>{
        try {
            const id = await dispatch(crearUsuario(name, job));
            alert(`Usuario creado con ID: ${id}`);
            await dispatch(obtenerUsuarioPorId(id)); // Consultar el usuario creado
        } catch (error) {
            alert('Error al crear el usuario');
        }
    };

    return(
        <div>
            <h2>Crear Usuario</h2>
            <input
            type= "text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder= "Nombre"
            />
            <input
            type= "text"
            value={job}
            onChange={(e)=> setJob(e.target.value)}
            placeholder= "Trabajo"
            />
            <button onClick={handleCreateUser}>Crear Usuario</button>
        </div>
    );
};
export default CrearUsuario;