import React, { useState } from 'react';

const UpdateCompany = () => {
    const [info, setInfo] = useState({})
    const handleAddCompany = (event) => {
        event.preventDefault()
        const form = event.target;
        info.name = form.name.value
        info.address = form.address.value
        info.size = form.size.value
        info.services = form.services.value
        info.email=form.email.value
        info.contactNumber = form.cnumber.value
        info.employeeNum = form.enum.value
        console.log(info)
        setInfo(info)
        fetch('http://localhost:5000/update-company-details', {
            method: 'PUT',
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
                <h1>Give the new company Updated Information</h1>
                <div>
                    <label>Name</label><br/>
                    <input className='db-admin-input' name='name' type='text' required></input>
                </div>
                <div>
                    <label>Address</label><br/>
                    <input className='db-admin-input' name='address' type='text' required></input>
                </div>
                <div>
                    <label>Company Size</label><br/>
                    <input className='db-admin-input' name='size' type='text' required></input>
                </div>
                <div>
                    <label>Services</label><br/>
                    <input className='db-admin-input' name='services' type='text' required></input>
                </div>
                <div>
                    <label>email</label><br/>
                    <input className='db-admin-input' name='email' type='text' required></input>
                </div>
                <div>
                    <label>Contact Number</label><br/>
                    <input className='db-admin-input' name='cnumber' type='text' required></input>
                </div>
                <div>
                    <label>employee Number</label><br/>
                    <input className='db-admin-input' name='enum' type='text' required></input>
                </div>
                <input className="input-fied-registration-form Button" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateCompany;