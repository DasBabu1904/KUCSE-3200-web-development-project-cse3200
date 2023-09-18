import React, { useState } from 'react';
import './CardProduct.css';
import DetailsOfProduct from '../DetailsOfProduct/DetailsOfProduct';
import ProductDetailMoadl from './ProductDetailMoadl/ProductDetailMoadl';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardProduct = (props) => {
    const navigate = useNavigate();
  
    const product = props.product
    const {
        name,
        productName,
        companyEmail,
        price
    } = product
    const handleOnclick = () => {
       
        console.log("click")
        // Define the object you want to send
        const dataToSend = { product: product };

        // Navigate to the target route and send the object
        navigate('/book-product', { state: { data: dataToSend } });
    }
    return (
        <div className='Card-Product'>
            <h3>Company Name:</h3>
            <h1> {name}</h1>
            <h4>Product: {productName}</h4>
            <h4>Price: {price}</h4>
            <p>Email: {companyEmail}</p>
            <div className='Button product-details-button' onClick={() => handleOnclick()
            }>See Details</div>
        </div>
    );
};

export default CardProduct;
