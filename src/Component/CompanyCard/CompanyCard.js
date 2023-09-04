import React from 'react';
import './CompanyCard.css';

const CompanyCard = (props) => {
    const company=props.company
    const {_id,
        name,
        address,
        size
        ,services
        ,contactNumber
        ,employeeNum
     }=company

    console.log(company)
    const GoDetails=()=>{
        // <DetailsOfProduct key={_id} product={product}></DetailsOfProduct>
    }
    return (
        <div>
            <div className='Card-Product'><span>Company Name</span><h1>{name}</h1>
            <h3>Product: {services}</h3>
            <p>Market size: {size}</p>
            <p>Address: {address}</p>
            <p>Employee Number:{employeeNum}</p>
            <h3>Contact{contactNumber}</h3>
            <button className="Button">Edit Details</button>
            </div>
        </div>
    );
};

export default CompanyCard;