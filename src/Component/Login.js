import axios from "axios";
import {useState , useEffect} from "react";


const Login = () => {

    const googleLogin = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/google'

    }

    const githubLogin = () => {
        window.location.href = 'http://localhost:8080l/oauth2/authorization/github'
    }
    return (
        <div>
            <h1>Login</h1>

            <button onClick = {googleLogin}>Login with Google</button>
            <button onClick = {githubLogin}>Login with Github</button>
        </div>
    );
}


export default Login;