import React, { useEffect, useState } from 'react';

const PaymentHistory = (props) => {
    const customer = props.customer
    console.log(customer.email)
    const [payments, setPayments] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/payments-of-user?orderBy=${customer.email}`, {
            method: 'GET',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>History</h1>
        </div>
    );
};

export default PaymentHistory;