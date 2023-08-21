import React from 'react';
import './Footer.css'
const Footer = () => {
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
                        <input type="email" name="email" id="subscirption-email" required />
                        <input className="Button" type="submit" value="Subscribe" />
                    </form>
                </div>
                <p className='footer-pera'>Be the first to hear about the latest offers.</p>
                <div className='footer-links'>
                    <div className='footer-link-head'>
                        <p>Information</p>
                        <p>Address</p>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;