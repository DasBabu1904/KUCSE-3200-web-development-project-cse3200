
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AdminProfile from '../Admin/AdminProfile/AdminProfile';
import UserProfile from '../UserProfile/UserProfile';
const auth = getAuth();
const Profile = () => {
    const [user, setUser] = useState(null);
    const [query, setQuery] = useState('');
    const [UserProfile, setUserProfile] = useState({})
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setQuery(user.email)

            } else {
                //console.log("no user")
            }
        });

    }, [auth])


    useEffect(() => {
        try {
            fetch(`http://localhost:5000/get-admin-profile?email=${query}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    setUserProfile(data[0])
                    console.log(setUserProfile)
                })
        }
        catch {
            console.error("Failed")
        }
    }, [])


    return (
        <div><h1>This is main profile: {UserProfile?.email}</h1>
            {UserProfile?.admin === 'true' ?
                <>
                    <AdminProfile></AdminProfile>
                </>
                :
                <>
                    <UserProfile></UserProfile>
                </>}
        </div>
    );
};

export default Profile;