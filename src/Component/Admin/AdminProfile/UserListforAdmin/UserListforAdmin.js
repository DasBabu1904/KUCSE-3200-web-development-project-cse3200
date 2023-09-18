import React, { useEffect, useState } from 'react';
import './UserListforAdmin.css'
const UserListforAdmin = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/get-user-list', {
            method: 'GET',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
    }, [])
    return (
        <div className='admin-user-list-div'>
            <table className='admin-user-list-table'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                </tr>
                {
                    users ?
                        <>
                            {
                                users.map(user =>
                                    <tr>
                                        <td>{user.FullName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.MobileNumber}</td>
                                    </tr>
                                )
                            }

                        </>
                        :
                        <>
                            <h1>NO users</h1>
                        </>
                }
            </table>
        </div>
    );
};

export default UserListforAdmin;