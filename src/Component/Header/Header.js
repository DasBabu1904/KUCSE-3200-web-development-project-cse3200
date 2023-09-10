import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import app from '../../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signOut, useAuthState } from "firebase/auth";
import { FirebaseError } from 'firebase/app';
const auth = getAuth();
const Header = () => {
    const navigate=useNavigate();
    const [user, setUser] = useState(null);
    const [dropClass, setdropClass] = useState('dropdown-content-header')
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                //console.log("got user\n", user)
            } else {
                //console.log("no user")
            }
        });

    }, [auth])
    console.log(user)
    const HandleLogOut = () => {
        console.log("Log out")
        signOut(auth).then(() => {
            console.log("sign out successful")
            setUser(null)
            navigate('/home')
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
                <div className='Profile-button'>
                    <div>
                        <div className='profile-picture-header'><img className='profile-picture-header' alt='PP'></img></div>
                        <div className='profile-name-header'>
                            {
                                user ?
                                    <p>{user.email}</p>
                                    :
                                    <h3>
                                    </h3>
                            }
                        </div>
                    </div>
                    <div >
                        {
                            user ?
                                <div>
                                    <button className='log-out-button header-dropdown-menu' onClick={() => { HandleLogOut() }}>
                                        LogOut
                                    </button>
                                    <Link className="header-dropdown-menu" to="/profile">profile</Link>
                                </div>
                                :
                                <div >
                                    <Link className="header-dropdown-menu" to="/log-in"> Log In</Link>
                                </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;