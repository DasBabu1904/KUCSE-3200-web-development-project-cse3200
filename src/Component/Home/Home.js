import React, { useEffect, useState } from 'react';
import './Home.css'
const Home = () => {
    const [homeContent,setHomeContent]=useState({})
    useEffect(()=>{
        fetch
    },[])
    return (
        <div>
            <h1>This is Home</h1>

            {/* description  */}
            
            <div>
                <div>
                    <div className='Home-description-header'>
                        <h1>

                        </h1>
                    </div>
                    <div className='Home-description-text'>
                        
                    </div>
                </div>
                <div className='Home-description-image'>

                </div>
            </div>
        </div>
    );
};

export default Home;