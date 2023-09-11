import React from 'react';
import './CustomerProfileBasicInfo.css'
const CustomerProfileBasicInfo = (props) => {
    const customer=props.customer
    const {
        FullName,
        Institution,
        MobileNumber,
        email,
        address
    }=customer


    return (
        <div className='customer-profile-details'>
            <table className='customer-profile-details-table' >
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

export default CustomerProfileBasicInfo;