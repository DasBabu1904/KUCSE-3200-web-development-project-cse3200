import React, { useState } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '../../firebase/firebase.config';
import axios from 'axios';

const Image_API = "184bd93e78d8ced740e96c7237144bac"
const auth = getAuth(app);
const imageUploadUrl = `https://api.imgbb.com/1/upload?key=869dd73cc280eb17249d54c62cb8326e`
const Register = () => {
    const navigate = useNavigate();
    const [info, setInfo] = useState({});
    const [signUpError, setSignUpError] = useState('')
    const [profilePic, setProfilePic] = useState(null)


    const handleProfilePicChange = (event) => {
        const file = event.target.files[0];
        setProfilePic(file);

    };


    const handleInfo = async (event) => {
        event.preventDefault();
        const form = event.target;
        info.email = form.email.value;
        info.password = form.password.value;
        info.confPassword = form.confPassword.value;
        info.FullName = form.FullName.value;
        info.MobileNumber = form.MobileNumber.value;
        info.Institution = form.Institution.value;
        info.address = form.address.value;
        info.admin = 'false';
        if (info.password !== info.confPassword) {
            alert("Your tow password is different ")
            return;
        }
        if (info?.password?.length < 6) {

            alert("Password is too small!!\n you should use more than 6 char")
            return;
        }
        // console.log(info)
        //creatin user
        createUserWithEmailAndPassword(auth, info.email, info.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                setSignUpError(error.message);
            });

        ///uploadin image
        try {
            const formData = new FormData();
            formData.append('image', profilePic);

            await fetch(imageUploadUrl, {
                method: 'POST',
                body: formData,
            })
                .then(res => res.json())
                .then(response => {
                    console.log(response)
                    info.ViewProfilePicUrl=response.data.display_url
                    info.DeleteProfilePicUrl=response.data.delete_url
                    console.log(info)
                })

        } catch (error) {
            console.error('Error uploading image:', error);
        }

        // sent data to database
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(info)
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
                                <div className="Imageinput-filed input_group-register">
                                    <div className='image-group-input'>
                                        <label htmlFor="imageInput">Upload Your Profile Picture:</label>
                                        <br />

                                        <input
                                            placeholder='Profile Picture'
                                            name="Profile Picture"
                                            required
                                            type="file"
                                            id="imageInput"
                                            accept="image/*" // Limit to image files only
                                            onChange={handleProfilePicChange}
                                        />
                                    </div>
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