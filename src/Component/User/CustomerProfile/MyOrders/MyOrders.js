import React, { useEffect, useState } from 'react';
import './MyOrders.css'
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth();

const MyOrders = (porps) => {
    const [user, setUser] = useState(null);
    const [Orders, setOrders] = useState([])
    const navigate = useNavigate()
    const customer = porps.customer
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

    useEffect(() => {
        fetch(`http://localhost:5000/get-user-oder-list?orderBy=${customer.email}`, {
            method: 'GET',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                // console.log(Orders)
            })
    }, [Orders])

    const handleProcedePayment = (order) => {

        fetch(`http://localhost:5000/poreced-payment?id=${order._id}`, {
            // mode: 'no-cors',
            method: 'POST',
            headers: { "content-type": "application/json" },
            // body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                window.location.replace(data.url)
            })
        // .catch(error => console.error(error));
    }
    return (
        <div>
            <h1>Here is your orders</h1>
            <div className='oders-user-profile-table'>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Aproval</th>
                        <th>Status</th>
                        <th>Payment</th>
                    </tr>
                    {
                        Orders ?
                            <>
                                {
                                    Orders.map(order =>
                                        <tr>
                                            <td>{order.productName}</td>
                                            <td>{order.companyEmail}</td>
                                            <td>{order.approval}</td>
                                            <td>{order.status}</td>
                                            {
                                                // console.log(order.approval )
                                                order?.payment == "false" ?
                                                    <>
                                                        {
                                                            order.approval == "true" ?
                                                                <>

                                                                    <td className='proceed-payment-button' onClick={() => handleProcedePayment(order)}>Proced Payment</td>
                                                                </>
                                                                :
                                                                <>
                                                                    <td>Not Aproved</td>
                                                                </>
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        <td>Paid</td>
                                                    </>
                                            }
                                        </tr>
                                    )
                                }
                            </>
                            :
                            <>
                            </>
                    }
                </table>
            </div>
        </div>
    );
};

export default MyOrders;