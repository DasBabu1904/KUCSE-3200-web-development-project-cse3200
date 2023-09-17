import React from 'react';
import './AddProduct.css'
import { faWarning } from '@fortawesome/free-solid-svg-icons';
const AddProduct = () => {
    const handleAddProduct=(event)=>{
        event.preventDefault()
        const form=event.target
        const info={
            name:form.name.value,
            productName:form.productname.value,
            companyEmail:form.email.value,
            price:form.price.value
        }
        console.log(info)
        fetch('http://localhost:5000/add-product', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Product Data Successfully added")
            })
    }
    return (
        <div>
            <form onSubmit={handleAddProduct}>
            <h1>Give the new company Information</h1>
                <div>
                    <label>Name</label><br/>
                    <input className='db-admin-input' name='name' type='text' required></input>
                </div>
                <div>
                    <label>Product Name</label><br/>
                    <input className='db-admin-input' name='productname' type='text' required></input>
                </div>
                <div>
                    <label>Company Email </label><br/>
                    <input className='db-admin-input' name='email' type='email' required></input>
                </div>
                <div>
                    <label>Price </label><br/>
                    <input className='db-admin-input' name='price' type='number' required></input>
                </div>
                <input className="input-fied-registration-form Button" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;