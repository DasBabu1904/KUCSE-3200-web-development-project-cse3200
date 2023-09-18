import React, { useEffect, useState } from 'react';
import './Search.css'
import CardProduct from '../CardProduct/CardProduct';

const Search = () => {
    const [displayProduct, setDisplayProduct] = useState([])

    const HandleSesarch = (event) => {
        event.preventDefault();
        const searchkey =(event.target.keywordsearch.value).toLowerCase()
     
        console.log(searchkey)
        fetch(`http://localhost:5000/get-product-list?productName=${searchkey}`, {
            method: 'GET',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                
                setDisplayProduct(data)
            })
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
            <div>
                {
                    displayProduct ?
                        <div className='search-result-grid'>
                            {
                                displayProduct.map(product => <CardProduct key={product._id} product={product}></CardProduct>)
                            }
                        </div>

                        :
                        <div>
                            Loading...
                        </div>
                }
            </div>
        </div>
    );
};

export default Search;