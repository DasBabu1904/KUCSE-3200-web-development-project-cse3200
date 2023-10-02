import React from 'react';
import './CustomerProfileBasicInfo.css'
const CustomerProfileBasicInfo = (props) => {
    const customer = props.customer
    console.log(customer)
    const {
        FullName,
        Institution,
        MobileNumber,
        email,
        address
    } = customer


    return (
        <div className='customer-profile-details'>
            <div className='customer-profile-details-table'>
                <table  >
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
            <div className='customer-profile-picture-sec'>
                <div className='customer-profile-picture-view'>
                    {
                        customer.ViewProfilePicUrl ?
                            <>
                                <img src={customer.ViewProfilePicUrl}></img>
                            </>
                            :
                            <></>
                    }

                </div>
                <div>{FullName}</div>
            </div>
        </div>
    );
};

export default CustomerProfileBasicInfo;