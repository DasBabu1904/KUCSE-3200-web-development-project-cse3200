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
            <h1>Company Name: {name}</h1>

        </div>
    );
};

export default CardCompnay;
