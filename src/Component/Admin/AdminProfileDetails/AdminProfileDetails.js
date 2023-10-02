import React from 'react';
import './AdminProfileDetails.css'
const AdminProfileDetails = (props) => {
    const admin = props.admin
    const { _id, email, address, MobileNumber, Institution, FullName, } = admin
    return (
        <div className='admin-profile-details'>
            <div className='admin-profile-details-table'>
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
            <div className='admin-profile-picture-sec'>
                <div className='admin-profile-picture-view'>
                    {
                        admin.ViewProfilePicUrl ?
                            <>
                                <img src={admin.ViewProfilePicUrl}></img>
                            </>
                            :
                            <></>
                    }

                </div>
                <div><h3>{FullName}</h3>
                <p>Your are an admin</p></div>

            </div>
        </div>
    );
};

export default AdminProfileDetails;