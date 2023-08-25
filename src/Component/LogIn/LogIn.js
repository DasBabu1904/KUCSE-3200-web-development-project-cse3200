import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './LogIn.css';
import app from '../../firebase/firebase.config';
const auth = getAuth(app);

const LogIn = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('')
    const handleLogIn = (event) => {
        event.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
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
        </div>
    );
};

export default LogIn;