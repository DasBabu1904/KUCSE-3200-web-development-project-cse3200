import React, { useEffect } from 'react';
import './BookProduct.css'
import { useLocation } from 'react-router-dom';
const BookProduct = () => {
    const location = useLocation();
    const receivedData = location.state?.data || null;
    const product=receivedData.product
    const {
        name,
        productName,
        companyEmail,
        price
    } = product
    useEffect(()=>{
        
    },[])
    return (
        <div className='book-product'>
            <div className='book-porduct-col-left'>
                <h1>Product Details</h1>
                <h1>Product Name: {productName}</h1>
                <h2>Manufactured By: {name}</h2>
                <h3>Price: ${price}</h3>
                <h4>Rating: </h4>
            </div>
            <div className='book-porduct-col-right'></div>
        </div>
    );
};

export default BookProduct;