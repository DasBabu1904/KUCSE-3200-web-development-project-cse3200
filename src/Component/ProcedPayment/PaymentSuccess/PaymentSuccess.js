import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentSuccess.css'
const auth = getAuth();
const PaymentSuccess = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    
    const [user, setUser] = useState(null);
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log("got user\n", user)
            } else {
                //console.log("no user")
            }
        });

    }, [auth])

    return (
        <div>
            <h1>Payment success</h1>
            <table className='Payment-sucess-massage'>
                <tr>
                <th>Email</th>
                <th>Ammount</th>
                <th>TnxID</th>
                <th>order ID</th>
                </tr>
                <tr>
                    <td>{user?.email}</td>
                    <td></td>
                    <td>{queryParams}</td>
                    <td></td>
                </tr>
            </table>
            
        </div>
    );
};

export default PaymentSuccess;