import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const[dropClass,setdropClass]=useState('dropdown-content-header')
    const [user,setUser]=useState({});
    useEffect(()=>{
        fetch("user.json")
        .then(res=>res.json())
        .then(res=>setUser(res))
    },[])

    const profileButton=()=>{
        setdropClass('dropdown-content-header-displa') 
        console.log("/profile")
    }
    const profileButtonBlur=()=>{
        setdropClass('dropdown-content-header')
    }

    return (
        <div className='Header-ribon'>
           <div className='header-left'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/search">Search</CustomLink>
                <CustomLink to="/leader-board">Leader Borad</CustomLink>
                <CustomLink to="/company-list">Company List </CustomLink>
           </div>


            <div className='header-right' >
                <button className='Profile-button' onClick={()=>{profileButton()}} onBlur={()=>profileButtonBlur()} >
                    <div>
                        <div className='profile-picture-header'><img className='profile-picture-header' src={user.img}></img></div>
                        <div className='profile-name-header'>{user.Name}</div>
                    </div>
                <div className={dropClass}>
                    <a className="header-dropdown-menu" href="google.com">google</a>
                    <a className="header-dropdown-menu" href="#">Link 2</a>
                    <a className="header-dropdown-menu" href="#">Link 3</a>
                </div>
                </button>
            
</div> 
        </div>
    );
};

export default Header;