import React, { useState } from 'react';

const DeleteCompany = () => {
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
                <div>
                    <label>Name</label>
                    <input name='name' type='text' required></input>
                </div>
                <div>
                    <label>email</label>
                    <input name='email' type='text' required></input>
                </div>
                <input className="input-fied-registration-form Button" type="submit" value="DELETE" />
            </form>
        </div>
    );
};

export default DeleteCompany;