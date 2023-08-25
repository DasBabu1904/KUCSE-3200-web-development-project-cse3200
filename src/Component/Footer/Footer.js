import React from 'react';
import './Footer.css'
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    const GotoLink=(url)=>{
        window.location.replace(url);
    }
    const handleInfo = (event) => {
        console.log('An email was submitted: ' + event.target.email.value);
        event.preventDefault();
    }
    return (
        <div>
            {/*------------------ footer------------------------ */}

            <div className='footer'>
                <div className='news-letter'>
                    <div><h1>Sign Up To
                        Our Newsletter.</h1></div>
                    <form onSubmit={handleInfo} action="">
                        <input placeholder='Your Email' type="email" name="email" id="subscirption-email" required />
                        <input className="Button" type="submit" value="Subscribe" />
                    </form>
                </div>
                <p className='footer-pera'>Be the first to hear about the latest offers.</p>
                <div className='footer-links-sec'>
                    <div className='footer-link-head'>
                        <p>Information</p>
                        <p>Address</p>
                    </div>
                    <div className='footer-links'>
                        <div className='footer-link-col'>
                            <Link className='footer-link' to=''>About Us</Link>
                            <Link className='footer-link' to=''>About Zip</Link>
                            <Link className='footer-link' to=''>Privacy Policy</Link>
                            <Link className='footer-link'to=''>Search</Link>
                        </div>
                        <div className='footer-link-col'>
                            <Link className='footer-link' to=''>Terms</Link>
                            <Link className='footer-link' to=''>Orders and Returns</Link>
                            <Link className='footer-link' to=''>Contact Us</Link>
                            <Link className='footer-link' to=''>Advanced Search</Link>
                            <Link className='footer-link' to=''>Newsletter Subscription</Link>
                        </div>
                        <div className='footer-address'>
                            <p>Address: 1234 Street Adress City Address, 1234</p>
                            <p>Phones: (00) 1234 5678</p>
                            <p>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>
                            <p> Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 11:00 AM - 5:00 PM</p>
                            <p>E-mail: shop@email.com</p> 
                        </div>
                    </div>
                    <div className='contact-footer'>
                        <div className='icon-fb-lnin'>
                            <Link className='fb-ln' onClick={()=>GotoLink('https://www.facebook.com')}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>FB</Link>
                            <Link className='fb-ln' onClick={()=>GotoLink('https://www.linkedin.com/')}><FontAwesomeIcon icon={faLink}></FontAwesomeIcon>linkedin</Link>
                        </div>
                        <div className='footer-copy-logo'>Copyright © 2023 Dev campus . Ltd.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;