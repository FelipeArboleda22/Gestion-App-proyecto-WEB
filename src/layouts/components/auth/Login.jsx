import './Login.css'
import {useState} from 'react'

const Login = () => {
    const [getName, setName] = useState("Ad")
    const [getPassword, setPassword] = useState("")

    if(getName === 'Felipe')
        console.log('Credenciales Correctas')
        if(getPassword === '123')
        console.log('Contraseña Correcta')

    return (
        <form>
            <section>
                <input onChange={(e) => {setName(e.target.value)}} type="text"placeholder="Name"/>
                <input onChange={(e) => {setPassword(e.target.value)}} type="text" placeholder="Password" />
            </section>
            <section>
                <button type="button">Iniciar Sesion</button>
                <button type="button">Crear Cuenta</button>
            </section>
        </form>
    )
}
export default Login
