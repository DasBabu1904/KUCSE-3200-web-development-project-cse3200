import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AdminProfile from '../Admin/AdminProfile/AdminProfile';
import CustomerProfile from '../User/CustomerProfile/CustomerProfile';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import './Profile.css'

const auth = getAuth();

const Profile = () => {
    const { user } = useParams();
    const [user2, setUser] = useState(null);
    const [query, setQuery] = useState('');
    const [UserProfile, setUserProfile] = useState({});

    useEffect( () => {
         onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                setUser(authUser);
                setQuery(authUser.email);
              
            } else {
                // Handle the case where the user is not authenticated
            }
        });
    }, []);
   
    useEffect( () => {
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

    return (
        <div>
            <h1 className='profile-name-in-profile'>Profile Name: {UserProfile?.FullName}</h1>
            {UserProfile?.admin === 'true' ? (
                <AdminProfile admin={UserProfile}/>
            ) : (
                <CustomerProfile customer={UserProfile}  />
            )}
        </div>
    );
};

export default Profile;
