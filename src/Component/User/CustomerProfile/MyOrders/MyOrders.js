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
                // console.log(Orders)
            })
    }, [])
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