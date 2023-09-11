import React from 'react';
import './AdminProfileDetails.css'
const AdminProfileDetails = (props) => {
    const admin=props.admin
    const {_id,email,address,MobileNumber,Institution,FullName,}=admin
    return (
        <div className='admin-profile-details'>
            <table className='admin-profile-details-table' >
                <tr>
                    <td>Name</td>
                    <td>{FullName}</td>
                </tr>
                <tr>
                    <td>Institution</td>
                    <td>{Institution}</td>
                </tr>
                <tr>
                    <td>Mobile Number</td>
                    <td>{MobileNumber}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{address}</td>
                </tr>
            </table>
        </div>
    );
};

export default AdminProfileDetails;