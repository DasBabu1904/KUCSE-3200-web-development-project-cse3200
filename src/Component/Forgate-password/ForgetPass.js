import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import './ForgetPass.css'
const auth = getAuth();

const ForgetPass = () => {
    const [emailstatus, setEmailStatus] = useState(false)
    const forgetPassword = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setEmailStatus(true)
                // Password reset email sent!
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <div>
            {
                emailstatus ?
                    <h1>
                        An Email has been sent, check your inbox
                    </h1>
                    :
                    <form className='forget-pass-form' onSubmit={forgetPassword}>
                        <label>Please Give your email address</label><br/>
                        <input className='forgate-email' name="email"></input>
                        <input className='Button' type='submit'></input>
                    </form>
            }
        </div>
    );
};

export default ForgetPass;