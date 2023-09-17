import React, { useEffect } from 'react';

const UserListforAdmin = () => {
    useEffect(() => {
        fetch('http://localhost:5000/get-user-list', {
            method: 'GET',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                // setCompanyList(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <h1>User list admin</h1>
        </div>
    );
};

export default UserListforAdmin;