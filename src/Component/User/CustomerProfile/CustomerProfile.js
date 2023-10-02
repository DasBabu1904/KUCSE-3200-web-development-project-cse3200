import React, { useState } from 'react';
import './CustomerProfile.css'
import CustomerProfileBasicInfo from './CustomerProfileBasicInfo/CustomerProfileBasicInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faCommentDollar, faUser } from '@fortawesome/free-solid-svg-icons';
import MyOrders from './MyOrders/MyOrders';
import PaymentHistory from './PaymentHistory/PaymentHistory';
const CustomerProfile = (props ) => {
    const customer=props.customer;
    const [pageNo,setPageNo]=useState(1)
    const selectPage=(pn)=>{
        setPageNo(pn)
    }
    const LoadPage=()=>{
        switch (pageNo){
            case 1 :
                return <CustomerProfileBasicInfo customer={customer}></CustomerProfileBasicInfo>
            case 2 :
                return <MyOrders  customer={customer}></MyOrders>
            case 3 :
                return <PaymentHistory customer={customer}></PaymentHistory>
            // case 4 :
            //     return 
            default :
                return null;
        }

    }
    return (
        <div className='customer-profile'>
            <div className='Customer-profile-left'>
                <h3 onClick={()=>selectPage(1)} className='customer-profile-left-col-link'>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    Besic Iformation<>   </>
                </h3>
                <h3 onClick={()=>selectPage(2)} className='customer-profile-left-col-link'>
                    <FontAwesomeIcon icon={faCommentDollar}></FontAwesomeIcon>
                    Orders</h3>
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