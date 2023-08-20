import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    
    const profileButton=()=>{
        console.log("/profile")
    }

    return (
        <div className='Header-ribon'>
           <div className='header-left'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/search">Search</CustomLink>
                <CustomLink to="/leader-board">Leader Borad</CustomLink>
                <CustomLink to="/company-list">Company List </CustomLink>
           </div>

                <div onClick={()=>{profileButton()}} className='header-right'>
                    <div className='profile-picture-header'></div>
                    <div className='profile-name-header'>Sourav Das</div>
                </div>  
        </div>
    );
};

export default Header;