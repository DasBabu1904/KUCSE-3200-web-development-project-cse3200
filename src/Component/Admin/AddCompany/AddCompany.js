import React, { useState } from 'react';
import './AddCompany.css'
const AddCompany = () => {
    const [info, setInfo] = useState({})
    const handleAddCompany = (event) => {
        event.preventDefault()
        const form = event.target;
        info.name = form.name.value
        info.address = form.address.value
        info.size = form.size.value
        info.services = form.services.value
        info.contactNumber = form.cnumber.value
        info.employeeNum = form.enum.value
        console.log(info)
        fetch('http://localhost:5000/add-company-to-db', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Company Data Successfully added")
            })
    }
    return (
        <div>
            <form onSubmit={handleAddCompany}>
                <div>
                    <label>Name</label>
                    <input name='name' type='text' required></input>
                </div>
                <div>
                    <label>Address</label>
                    <input name='address' type='text' required></input>
                </div>
                <div>
                    <label>Company Size</label>
                    <input name='size' type='text' required></input>
                </div>
                <div>
                    <label>Services</label>
                    <input name='services' type='text' required></input>
                </div>
                <div>
                    <label>Contact Number</label>
                    <input name='cnumber' type='text' required></input>
                </div>
                <div>
                    <label>employee Number</label>
                    <input name='enum' type='text' required></input>
                </div>
                <input className="input-fied-registration-form Button" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddCompany;