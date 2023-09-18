import React, { useEffect, useState } from 'react';
import './RequestApproval.css'
const RequestApproval = () => {
    const [Orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/get-admin-oder-list`, {
            method: 'GET',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                // console.log(Orders)
            })
    }, [])

    const wantToapprove = (order) => {
        const conf = window.confirm("Are you sure you want to Aprove? ")
        if (conf) {
            order.approval='true'
            console.log(order)

            fetch('http://localhost:5000/update-order-approval', {
                method: 'PUT',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    alert("Order data Updated")
                })
        }
    }
    return (
        <div>
            <h1>This are the order request:</h1>
            <div className='oders-admin-profile-table'>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Aproval</th>
                        <th>Status</th>
                    </tr>
                    {
                        Orders ?
                            <>
                                {
                                    Orders.map(order =>
                                        <tr>
                                            <td>{order.productName}</td>
                                            <td>{order.companyEmail}</td>
                                            <td onClick={() => wantToapprove(order)}>{order.approval}</td>
                                            <td>{order.status}</td>
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

export default RequestApproval;