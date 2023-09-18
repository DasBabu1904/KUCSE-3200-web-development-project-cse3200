import React, { useEffect, useState } from 'react';
import './MyOrders.css'

const MyOrders = (porps) => {
    const [Orders, setOrders] = useState([])
    const customer = porps.customer
    useEffect(() => {
        fetch(`http://localhost:5000/get-user-oder-list?orderBy=${customer.email}`, {
            method: 'GET',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <h1>Here is your orders</h1>
        </div>
    );
};

export default MyOrders;