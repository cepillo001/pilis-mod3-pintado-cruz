import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../contexts/UserContext';
import { LocationsContext } from "../../contexts/LocationsContext";
import './Login.css'

const Login = () => {
    const { setCurrentUser } = useContext(UserContext)
    const { setLocations } = useContext(LocationsContext)
    //traemos register, handleSubmit y errors a nuestro componente
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    //"data" es la informacion que el usuario carga en el formulario
    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem("users")) ?? [];
        const user = users.find((obj) => obj.user.username === data.username) ?? null;
        if(user){
            setCurrentUser(user.user)
            setLocations(user.locations)
        }else{
            localStorage.setItem('currentUser', JSON.stringify(data))
            setCurrentUser(data)
        }
        navigate('/')
    }

    //aca armamos el formulario [a register le pasamos el id con el que vamos a identificar
    //ese register (username y password), y el requerido para que no lo dejen vacio al campo]
    return (
        <div className="sign-in-container">
            <span>Ingresar usuario y contraseña</span>
            <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
                <input 
                    className="input-form"
                    type="text"
                    placeholder="nombre de usuario"
                    { ...register('username', {
                        required : 'Ingrese su nombre de usuario'
                        }
                    )} 
                />
                <p>{errors.username?.message}</p>
                <input
                    className="input-form"
                    type='password'
                    placeholder="Contraseña"
                    {...register('password', {
                        required : 'Ingrese su contraseña'
                        }
                    )}
                />
                <p>{errors.password?.message}</p>
                <button className="btn-form" type="submit">Iniciar Sesion</button>
            </form>
        </div>
    )
}

export default Login;