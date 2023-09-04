import React from 'react';
import './CardCompnay.css'
const CardCompnay = (props) => {
    const companydetail = props.company
    const {
        address,
        contactNumber,
        email,
        employeeNum,
        name,
        services,
        size
    } = companydetail
    return (
        <div className='company-cards'>
            <h3>Company Name:</h3>
            <h1> {name}</h1>
            <p>Employee Number: {employeeNum}</p>
            <p>services: {services}</p>
            <p>Company Size {size}</p>
            <h3>Contact:</h3>
            <p>Email: {email}</p>
            <p>Contact Number: {contactNumber}</p>
            <p>Address: {address}</p>
        </div>
    );
};

export default CardCompnay;
