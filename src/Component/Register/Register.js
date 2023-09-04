import React, { useState } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword , sendEmailVerification } from "firebase/auth";
import app from '../../firebase/firebase.config';
const auth = getAuth(app);

const Register = () => {
    const navigate = useNavigate();
    const [info, setInfo] = useState({});
    const [signUpError, setSignUpError] = useState('')
    const handleInfo = (event) => {
        event.preventDefault();
        const form = event.target;
        info.email = form.email.value;
        info.password = form.password.value;
        info.confPassword = form.confPassword.value;
        info.FullName = form.FullName.value;
        info.MobileNumber = form.MobileNumber.value;
        info.Institution = form.Institution.value;
        info.address = form.address.value;
        if (info.password !== info.confPassword) {
            alert("Your tow password is different ")
            return;
        }
        if (info?.password?.length < 6) {

            alert("Password is too small!!\n you should use more than 6 char")
            return;
        }
        // console.log(info)
        createUserWithEmailAndPassword(auth, info.email, info.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                setSignUpError(error.message);
            });

        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        // sendEmailVerification(auth.currentUser)
        //     .then(() => {
        //       // Email verification sent!
        //     });
        navigate('/user-profile');
    }





    return (

        <div>
            <div>
                <div className="From_container">
                    <div className="From">
                        <h1 className="Form_header">Please Register</h1>
                        <div >
                            <form onSubmit={handleInfo} action="">
                                <div className="input_group-register">
                                    <label htmlFor="">Email</label><br />
                                    <input className="input-fied-registration-form" type="email" name="email" id="" required />
                                </div>
                                <div className="input_group-register">
                                    <label htmlFor="">Password</label><br />
                                    <input className="input-fied-registration-form" type="password" name="password" id="" required />
                                </div>
                                <div className="input_group-register">
                                    <label htmlFor="">Confirm Password</label><br />
                                    <input className="input-fied-registration-form" type="password" name="confPassword" id="" required />
                                </div>
                                <div className="input_group-register">
                                    <label htmlFor="">Full Name</label><br />
                                    <input className="input-fied-registration-form" placeholder='Full Name' type="text" name="FullName" id="" required />
                                </div>

                                <div className="input_group-register">
                                    <label htmlFor="">Mobile Number</label><br />
                                    <input className="input-fied-registration-form" placeholder='Mobile Number' type="text" name="MobileNumber" id="" required />
                                </div>

                                <div className="input_group-register">
                                    <label htmlFor="">Name of Institution</label><br />
                                    <input className="input-fied-registration-form" placeholder='Name of Institution' type="text" name="Institution" id="" required />
                                </div>

                                <div className="input_group-register">
                                    <label htmlFor="">Address</label><br />
                                    <input className="input-fied-registration-form" placeholder='Address' type="text" name="address" id="" required />
                                </div>

                                {/* This is the submit button */}
                                <input className="input-fied-registration-form Button" type="submit" value="Sign Up" />

                            </form>
                            <p>Alrady Have an account? <Link className="sign_In_Link_Style" to="/LogIn">Please LogIn </Link></p>
                            <div className="horizontal_Line">
                                <div className="horizontal_Line_Block "><hr /></div>
                                <div> <p > or </p></div>
                                <div className="horizontal_Line_Block "> <hr /></div>
                            </div>
                            <p>{signUpError}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;