import React from 'react';
import './Search.css'
const Search = () => {
    const HandleSesarch=(event)=>{
        event.preventDefault();
        console.log(event.target.keywordsearch.value)
    }
    return (
        <div>
            <div className='Search-bar'>
                    <div><h1>Get Your Package</h1></div>
                    <form onSubmit={HandleSesarch} action="">
                        <input type="text" name="keywordsearch" id="search-keyword" required />
                        <input className="Button" type="submit" value="Search" />
                    </form>
                </div>
        </div>
    );
};

export default Search;