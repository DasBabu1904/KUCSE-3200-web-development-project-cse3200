import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import app from '../../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app);
const user = auth.currentUser;
const Header = () => {


    const [dropClass, setdropClass] = useState('dropdown-content-header')
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            setUser(user)
        } else {
            console.log("No user is signed in.")
        }
    });

    const HandleLogOut = () => {
        console.log("Log out")
        signOut(auth).then(() => {
            console.log("sign out successful")
        }).catch((error) => {
            console.error(error)
        });
    }
    const profileButton = () => {
        setdropClass('dropdown-content-header-displa')
        console.log("/profile")
    }
    const profileButtonBlur = () => {
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

            {/* onMouseLeave={() => { profileButtonBlur() }} */}
            <div className='header-right' >
                <button className='Profile-button' onMouseEnter={() => { profileButton() }} >
                    <div>
                        <div className='profile-picture-header'><img className='profile-picture-header' src={user.img}></img></div>
                        <div className='profile-name-header'>{user.Name}</div>
                    </div>
                    <div className={dropClass}>
                        <Link className="header-dropdown-menu" to="/user-profile"> Profile</Link>
                        <Link className="header-dropdown-menu" to=""> DashBoard</Link>
                        <Link className="header-dropdown-menu" to=""> Payment Method</Link>
                        {
                            user ?
                                <div>
                                    <h3 className="header-dropdown-menu" to=""> LogOut</h3>
                                </div>
                                :
                                <div onClick={() => HandleLogOut}>
                                    <h3 className="header-dropdown-menu" to=""> Log In</h3>
                                </div>
                        }
                    </div>
                </button>

            </div>
        </div>
    );
};

export default Header;