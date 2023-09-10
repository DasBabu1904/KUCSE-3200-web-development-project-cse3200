import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './LogIn.css';
import app from '../../firebase/firebase.config';
import { Link, useNavigate } from 'react-router-dom';
const auth = getAuth(app);

const LogIn = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('')
    const navigate = useNavigate();
    const handleLogIn = (event) => {
        console.log("in the login")
        event.preventDefault()
        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorMessage)
            })
        navigate('/profile')
    }
    const getEmail = (event) => {
        setUserEmail(event.target.value)
    }
    const getPassword = (event) => {
        setUserPassword(event.target.value)
    }
    return (
        <div>
            <form onSubmit={handleLogIn} action="">
                <div className="input_group">
                    <label className='form-input-label' htmlFor="">Email</label><br />
                    <input className='input-area-class-login' onBlur={getEmail} placeholder="Email" type="email" name="" id="email" required />
                </div>
                <div className="input_group">
                    <label className='form-input-label' htmlFor="">Password</label><br />
                    <input className='input-area-class-login' onBlur={getPassword} placeholder="Password" type="password" name="password" id="" required />
                </div>
                <input className="Button form_submit_Button" type="submit" value="LogIn" />
            </form>
            <hr />
            <Link className='link-in-bottom-login' to="/register">Not yet registered please register</Link>
            <Link className='link-in-bottom-login'to='/forget-pass'>Forget Password?</Link>
        </div>
    );
};

export default LogIn;