import React, { useEffect, useState } from 'react';
import './Home.css'
import LoadData from '../../Hooks/LoadData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faLaptopMedical } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer/Footer';
const Home = () => {

    return (
        <div>
            {/* description 

            <div>
                <div>
                    <div className='Home-description-header'>
                        <h1>
                            {data?data.home.description.head:console.log("Loading")}
                        </h1>
                    </div>
                    <div className='Home-description-text'>

                    </div>
                </div>
                <div className='Home-description-image'>

                </div>
            </div> */}


            <div className='What-we-do-section'>
                <div className='What-we-do-tex'>
                    <div className='Home-description-header'>
                        <h1>
                            What actually we
                            do?
                        </h1>
                    </div>
                    <div className='Home-description-text'>
                        <p>Welcome to our innovative e-commerce platform,
                            where finding your ideal developer is effortless.
                            Discover a diverse range of skilled professionals
                            across various domains. Compare services, examine
                            portfolios, and read reviews to make informed decisions.
                            Streamline your hiring process and embark on
                            successful collaborations with ease. Your perfect
                            developer is just a click away</p>
                    </div>
                </div>
                <div className='Home-description-image'>
                    <img className='Home-description-image-img' src='search-concept-landing-page.jpg'></img>
                </div>
            </div>

            {/* features */}

            <div className='home-card-section'>
                <div className='card-home'>
                    <h1>Discover Leading
                        Companies:</h1>
                    <p>Explore our Leader Board showcasing top-tier companies in various industries. Uncover industry leaders and innovators who excel in delivering exceptional services.</p>
                </div>
                <div className='card-home'>
                    <h1>Insightful Customer
                        Reviews and Ratings:</h1>
                    <p>Gain valuable insights from authentic customer reviews and ratings. Get a glimpse into the experiences of others who have engaged with these companies, helping you make confident decisions.</p>
                </div>
                <div className='card-home'>
                    <h1>Effortless Company
                        Comparison:</h1>
                    <p>Gain valuable insights from authentic customer reviews and ratings. Get a glimpse into the experiences of others who have engaged with these companies, helping you make confident decisions.</p>
                </div>
                <div className='card-home'>
                    <h1>Discover Leading
                        Companies:</h1>
                    <p>Explore our Leader Board showcasing top-tier companies in various industries. Uncover industry leaders and innovators who excel in delivering exceptional services.</p>
                </div>
                <div className='card-home'>
                    <h1>Insightful Customer
                        Reviews and Ratings:</h1>
                    <p>Gain valuable insights from authentic customer reviews and ratings. Get a glimpse into the experiences of others who have engaged with these companies, helping you make confident decisions.</p>
                </div>
                <div className='card-home'>
                    <h1>Effortless Company
                        Comparison:</h1>
                    <p>Gain valuable insights from authentic customer reviews and ratings. Get a glimpse into the experiences of others who have engaged with these companies, helping you make confident decisions.</p>
                </div>
            </div>


            <div className='why-us-in-home'>
                <div className='why-us-text-in-home'>
                    <h1 >Why us?</h1>
                </div>
                <div className='why-us-in-home-content'>

                    <div className='why-us-three-sec'>
                        <div id='Icons-in-home-whyus1'>
                            <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></div>
                        <div className='home-why-us-text'>
                            <h1>Fast Delivery
                            </h1>
                            <p>Phasellus eleifend at felis sit amet tincidunt. Praesent ac fringilla nisi.
                            </p>
                        </div>
                    </div>
                    <div className='why-us-three-sec'>
                        <div id='Icons-in-home-whyus2'>
                            <FontAwesomeIcon icon={faLaptopMedical}></FontAwesomeIcon></div>
                        <div className='home-why-us-text'>
                            <h1>High Quality
                            </h1>
                            <p>Praesent ac fringilla nisi, at gravida nisl. Phasellus eleifend at felis sit amet tincidunt.
                            </p>
                        </div>
                    </div>
                    <div className='why-us-three-sec'>
                        <div id='Icons-in-home-whyus3'>
                            <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>
                        </div>
                        <div className='home-why-us-text'>
                            <h1>24/7 Support
                            </h1>
                            <p>
                                Praesent ac fringilla nisi, at gravida nisl. Ut ornare in arcu ut interdum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
    );
};

export default Home;