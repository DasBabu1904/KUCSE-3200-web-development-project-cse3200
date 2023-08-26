import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import app from '../../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signOut, useAuthState } from "firebase/auth";
import { FirebaseError } from 'firebase/app';
const auth = getAuth();
const Header = () => {
    const [user, setUser] = useState(null);
    const [dropClass, setdropClass] = useState('dropdown-content-header')
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log("got user\n", user)
            } else {
                console.log("no user")
            }
        });

    }, [auth])


    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         const uid = user.uid;
    //         setUser(user)
    //     } else {
    //         console.log("No user is signed in.")
    //     }
    // });
    console.log(user)
    const HandleLogOut = () => {
        console.log("Log out")
        signOut(auth).then(() => {
            console.log("sign out successful")
            setUser(null)
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
                <button className='Profile-button'>
                    <div>
                        <div className='profile-picture-header'><img className='profile-picture-header' alt='PP'></img></div>
                        <div className='profile-name-header'>
                            {
                                user ?
                                    <p>{user.email}</p>
                                    :
                                    <h3>
                                        Name
                                    </h3>
                            }
                        </div>
                    </div>
                    <div >
                        {
                            user ?
                                <button onClick={() => { HandleLogOut() }}>
                                    <h3 className="header-dropdown-menu"> LogOut</h3>
                                </button>
                                :
                                <div >
                                    <Link className="header-dropdown-menu" to="/log-in"> Log In</Link>
                                </div>
                        }
                    </div>
                </button>

            </div>
        </div>
    );
};

export default Header;