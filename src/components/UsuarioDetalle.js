import React from "react"
import { useSelector } from "react-redux"




const UsuarioDetalle = () =>{
    const usuarioDetalle = useSelector((state)=> state.usuario.usuarioDetalle);

    return (
        <div>
            <h2>Detalle del Usuario</h2>
            {usuarioDetalle ? (
                <div>
                    <p>ID: {usuarioDetalle.id}</p>
                    <p>Nombre: {usuarioDetalle.first_name} {usuarioDetalle.last_name}</p>
                    <p>Email: {usuarioDetalle.email}</p>
                </div>
            ) : (
                <p>No hay detalles del usuario</p>
            )}
        </div>
    );
};

export default UsuarioDetalle;