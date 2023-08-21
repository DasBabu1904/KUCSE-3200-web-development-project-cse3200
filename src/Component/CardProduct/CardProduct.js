import React from 'react';
import './CardProduct.css';
import DetailsOfProduct from '../DetailsOfProduct/DetailsOfProduct';
const CardProduct = (props) => {
    const product=props.product
    const {_id
        ,index
        ,guid
        ,isActive
        ,balance
        ,ratting
        ,picture
        ,sercive_name
        ,name
        ,gender
        ,company
        ,email
        ,phone
        ,address
        ,about
        ,registered}=product
    const GoDetails=()=>{
        <DetailsOfProduct key={_id} product={product}></DetailsOfProduct>
    }
    return (
        <div>
            <div className='Card-Product'><span>Company Name</span><h1>{company}</h1>
            <h3>Product: {sercive_name}</h3>
            <p>Price: {balance}</p>
            <p>Ratting: {ratting}</p>
            <p>Active Status{isActive}</p>
            <p>Majority of Dev in company : {gender}</p>
            <h3>Contact</h3>
            <p>Email ID: {email}</p>
            <p>Phone: {phone}</p>
            <button className="Button" onClick={()=>{GoDetails()}}>View Details</button>
            </div>
        </div>
    );
};

export default CardProduct;