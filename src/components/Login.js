import { useState } from "react"
import { useDispatch } from "react-redux";
import { loginUsuario } from "../redux/usuarioActions";



const Login = () => {
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');
    const dispatch = useDispatch();

    const handleLogin = async() =>{
        try {
          await dispatch(loginUsuario(email, password)); 
          alert('Login ')
        } catch (error) {
          alert('Error usuario o contraseña invalida')  
        }
       
    }
    return(
        <div>
            <h2>Login</h2>
            <input
            type= "email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder= "Email"
            />
            <input
            type= "password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder= "Password"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};
export default Login;