import React, { useEffect, useState } from 'react';
import './AdminProfile.css'
import AdminProfileDetails from '../AdminProfileDetails/AdminProfileDetails';
import CompanyListAdmin from './CompanyListAdmin/CompanyListAdmin';
const AdminProfile = (props) => {
    const admin=props.admin
    const [secNum,SetSecNum]=useState(1)
    const HandleAdminProfileSection=(secNumpara)=>{
        SetSecNum(secNumpara)
        console.log("called",typeof secNum)
    };
    console.log(admin)
    const renderComponent = () => {
        switch (secNum) {
          case 1:
            return <AdminProfileDetails admin={admin} />;
          case 2:
            return <CompanyListAdmin></CompanyListAdmin>;
        //   case 'C':
        //     return <ComponentC />;
          default:
            return null;
        }
      };
    
    return (
        <div className='admin-profile'>

            <div className='Admin-profile-left-col'>
                <h3 onClick={()=>HandleAdminProfileSection(1)} className='admin-profile-left-col-link'>Profile Details</h3>
                <h3 onClick={()=>HandleAdminProfileSection(2)} className='admin-profile-left-col-link'>Company List</h3>
                <h3 onClick={()=>HandleAdminProfileSection(3)} className='admin-profile-left-col-link'>User List</h3>
                <h3 onClick={()=>HandleAdminProfileSection(4)} className='admin-profile-left-col-link'>Request Arproval</h3>
            </div>

            <div className='Admin-profile-rigth-col'>
                {renderComponent()}
            </div>
        </div>
    );
};

export default AdminProfile;