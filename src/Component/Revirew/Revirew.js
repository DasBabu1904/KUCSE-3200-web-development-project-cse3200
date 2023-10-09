import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Revirew.css'
const Revirew = () => {
    const location = useLocation();
    const order = location.state;
    const [reviewtext,setReviewtext]=useState('')
    console.log(order)
    const handleReviewtext=(event)=>{
        setReviewtext(event.target.value)
        // console.log(reviewtext)
    }
    const SubmitRevirew=()=>{

    }
    return (
        <div>
            <h1>Write a review for  <span className='Company-Name-in-review'>{order.companyEmail}</span></h1>
            <textarea className='review-input-class' placeholder="Write something.." onChange={handleReviewtext}></textarea>
            <br/>
            <button className='review-submit-profile-button' onClick={()=>SubmitRevirew}>Submit review</button>
        </div>
    );
};

export default Revirew;