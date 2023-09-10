import React from 'react';
import './CardProduct.css';
import DetailsOfProduct from '../DetailsOfProduct/DetailsOfProduct';
const CardProduct = (props) => {
    const company = props.product
    console.log(company)
    const {
        name,
        address,
        contactNumber,
        email,
        employeeNum,
        services,
        size
    } = company
    // const GoDetails=()=>{
    //     <DetailsOfProduct key={_id} product={product}></DetailsOfProduct>
    // }
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

export default CardProduct;