import React, { useState } from 'react';
import './CustomerProfile.css'
import CustomerProfileBasicInfo from './CustomerProfileBasicInfo/CustomerProfileBasicInfo';
const CustomerProfile = (props ) => {
    const customer=props.customer;
    const [pageNo,setPageNo]=useState(0)
    const selectPage=(pn)=>{
        setPageNo(pn)
    }
    const LoadPage=()=>{
        switch (pageNo){
            case 1 :
                return <CustomerProfileBasicInfo customer={customer}></CustomerProfileBasicInfo>
            // case 2 :
            //     return 
            // case 3 :
            //     return 
            // case 4 :
            //     return 
            default :
                return null;
        }

    }
    return (
        <div className='customer-profile'>
            <div className='Customer-profile-left'>
                <h3 onClick={()=>selectPage(1)} className='customer-profile-left-col-link'>Besic Iformation</h3>
                <h3 onClick={()=>selectPage(2)} className='customer-profile-left-col-link'>Orders</h3>
                <h3 onClick={()=>selectPage(3)} className='customer-profile-left-col-link'>Payment History</h3>
                <h3 onClick={()=>selectPage(4)} className='customer-profile-left-col-link'>Reviews</h3>
            </div>
            <div className='Customer-profile-right'>
                {LoadPage()}
            </div>
        </div>
    );
};

export default CustomerProfile;