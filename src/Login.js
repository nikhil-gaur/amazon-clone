import React, { useState } from 'react';
import { auth } from './firebase';
import './Login.css';
import { Link, useHistory } from 'react-router-dom'; 

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            . createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // successfully created a user with email and password
                console.log(auth);

                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">

        
            <img
                className="login__logo"
                src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
                alt=""            
            />

            <div className="login__container">
                <h1>Login</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange = {e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange = {e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                
                </form>

                <p>
                    By Signing in you agree to Amazon 
                    Clone condition of Use & Sale. Please 
                    see our, Privacy Notice or Cookies Notice 
                    and our Intrest-Based Ads Notice.
                </p>

                <button onClick={register} className="login__registerButton">Create your Amazon account</button>
            </div>
 

        </div>
    )
}

export default Login;
