import React, { useState } from 'react';

import './DeleteCompany.css'

const DeleteCompany = (props) => {
    console.log(props.event)
    const [info, setInfo] = useState({})
    const handleAddCompany = (event) => {
        event.preventDefault()
        const form=event.target
        info.name = form.name.value
        info.email=form.email.value
        setInfo(info)
        console.log(info)
        fetch('http://localhost:5000/delete-company', {
            method: 'DELETE',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Company Data Successfully Deleted...!!!")
            })
    }
    return (
        <div>
            <form onSubmit={handleAddCompany}>
            <h1>Give the company Information you want to delete</h1>
                <div>
                    <label>Name</label><br/>
                    <input className='db-admin-input' name='name' type='text' required></input>
                </div>
                <div>
                    <label>email</label><br/>
                    <input className='db-admin-input' name='email' type='text' required></input>
                </div>
                <input className="input-fied-registration-form Button" type="submit" value="DELETE" />
            </form>
        </div>
    );
};

export default DeleteCompany;