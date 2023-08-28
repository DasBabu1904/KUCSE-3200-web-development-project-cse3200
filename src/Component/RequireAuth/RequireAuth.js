import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
const auth = getAuth();
const RequireAuth = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                //console.log("got user\n", user)
            } else {
                //console.log("no user")
            }
        });

    }, [auth])
    const location = useLocation()
    console.log(user)

    if (!user) {

        return <Navigate to="/log-in" state={{ form: location }} replace></Navigate>
    }
    return (
        children
    );
};

export default RequireAuth;