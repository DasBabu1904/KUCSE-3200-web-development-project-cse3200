import React, { useEffect, useState } from 'react';
import './EditUserProfile.css';
import { useParams } from 'react-router-dom';
const EditUserProfile = (props) => {
    const [info, setInfo] = useState({});
    const { customer } = props;
    const query = customer.email;
    //console.log(query)
    const [UserProfile, setUserProfile] = useState({});
    useEffect(() => {
        if (query) {
            fetch(`http://localhost:5000/get-admin-profile?email=${query}`, {
                method: 'GET',
                headers: { 'content-Type': 'application/json' },
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then((data) => {
                    //console.log(data);
                    setUserProfile(data[0]);

                })
                .catch((error) => {
                    console.error('Error fetching user profile:', error);
                    // Handle the error here, e.g., show an error message to the user
                });
        }
    }, [query]);

    const handleUPInfo = (event) => {
        event.preventDefault()
        const form = event.target;
        info.email=UserProfile.email;
        info.FullName = form.FullName.value;
        info.MobileNumber = form.MobileNumber.value;
        info.Institution = form.Institution.value;
        info.address = form.address.value;
        console.log(info)

        fetch('http://localhost:5000/update-user-profile', {
            method: 'PUT',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Company Data Successfully Updated")
            })
    }
    const handleProfilePicChange = () => {
        console.log("pic")
    }
    return (
        <div>
            <div>
                <div>
                    <div className="From_container">
                        <div className="From">
                            <h1 className="Form_header">Update Your info sincerely</h1>
                            <div className='Form-edit-profile' >
                                <form onSubmit={handleUPInfo} action="">
                                    <div>
                                        <h3>Your Current Email is :
                                            <span className='your-current-info'>
                                                {UserProfile.email}
                                            </span>
                                        </h3>
                                        <p>You cannot change your email<br />
                                            see our polices.
                                        </p>
                                    </div>
                                    <div className="input_group-register">
                                        <label htmlFor="">Your Current name:
                                            <span className='your-current-info'>
                                                {UserProfile.FullName}
                                            </span>
                                        </label><br />
                                        <input className="input-fied-registration-form" placeholder='Full Name' type="text" name="FullName" id="" required />
                                    </div>

                                    <div className="input_group-register">
                                        <label htmlFor="">Your Current Mobile Number:
                                            <span className='your-current-info'>
                                                {UserProfile.MobileNumber}
                                            </span>
                                        </label><br />
                                        <input className="input-fied-registration-form" placeholder='Mobile Number' type="text" name="MobileNumber" id="" required />
                                    </div>

                                    <div className="input_group-register">
                                        <label htmlFor="">Your Current Institution:
                                            <span className='your-current-info'>
                                                {UserProfile.Institution}
                                            </span>
                                        </label><br />
                                        <input className="input-fied-registration-form" placeholder='Name of Institution' type="text" name="Institution" id="" required />
                                    </div>

                                    <div className="input_group-register">
                                        <label htmlFor="">Your Current Address:
                                            <span className='your-current-info'>
                                                {UserProfile.address}
                                            </span>
                                        </label><br />
                                        <input className="input-fied-registration-form" placeholder='Address' type="text" name="address" id="" required />
                                    </div>
                                    {/* This is the submit button */}
                                    <input className="input-fied-registration-form Button" type="submit" value="Update" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUserProfile;