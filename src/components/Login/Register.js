import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Register = () => {
    const {createAccount} = useAuth();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("");
    
    const handleName = e => {
        setName(e.target.value)
        console.log(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    
    const handleRegistration = e =>{
        e.preventDefault()
        if (password.length < 6) {
            setError("Password Must be at least 6 characters long.");
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Password Must contain 2 upper case");
            return;
        }
        createAccount(email, password, name)
        setError("")
    }
    
  
    return (
        <div>
            <div className="form-container register ">
                <h3>Register</h3>
                <form onSubmit={handleRegistration}>
                    <input className="input-field mt-3" onBlur={handleName} type="name" placeholder="Your Name" required=""/>
                    <br/>
                    <input className="input-field mt-3" onBlur={handleEmail} type="email" placeholder="Your Email" required=""/>
                    <br/>
                    <input className="input-field my-3" onBlur={handlePassword} type="password" placeholder="Password"  required=""/>
                    <br/>
                   <input className="register-btn m-2" type="submit" value="Register"/>
                   <p className='my=3'>{error}</p>
                   <Link to ="/login">
                    <button className='btn btn-success mx-2'>Already Register? Login</button>
                    </Link>
                   </form>
            </div>
        </div>
    );
};

export default Register;