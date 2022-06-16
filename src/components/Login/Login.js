import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css"
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { signInUsingGoogle, processLogin} = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const location = useLocation()
    const navigate = useNavigate()
    const redirect_uri = location.state?.from || "/"
   
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then((result) => {
        navigate(redirect_uri)
        setError('')
      }).catch((error) => {
        setError(error.message);
      });
    
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
   }
   const handleLogin = e => {
    e.preventDefault()
    processLogin(email, password)
    .then((result) => {
        navigate(redirect_uri)
        setError('')
      })
      .catch((error) => {
        setError(error.message);
      });
   }
    return (
        <div>
            <div className="form-container login">
                <h3 className='pt-3'>Login</h3>
                <form onSubmit={handleLogin}>
                    <input onBlur={handleEmail } className="input-field mt-3" type="email" placeholder="Your Email" required=""/>
                    <br/>
                    <input onBlur={handlePassword} className="input-field mt-3" type="password" placeholder="Password" required=""/>
                    <br/>
                   <input className="login-btn my-2" type="submit" value="Login"/>
                   <Link to ="/register">
                    <button className='btn btn-success mx-2'>Create New Account</button>
                    </Link>                   
                   </form>
                   <button onClick={handleGoogleLogin} className="btn btn-primary my-3" type="button">Login with Google</button>
            </div>
        </div>
    );
};

export default Login;