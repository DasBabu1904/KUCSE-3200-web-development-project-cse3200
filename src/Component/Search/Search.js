import React, { useEffect, useState } from 'react';
import './Search.css'
import CardProduct from '../CardProduct/CardProduct';

const Search = () => {
    const [displayProduct, setDisplayProduct] = useState([])
    let searchkey = ''
    const HandleSesarch = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/get-company-list', {
            method: 'GET',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDisplayProduct(data)
            })
        // console.log(company)
        // searchkey = ''
        // searchkey = (event.target.keywordsearch.value).toLowerCase()
        // const filetered = company.filter(item => item.sercive_name.toLowerCase() == searchkey)
        // setDisplayProduct(filetered)
        // setDisplayProduct(company)
        console.log(displayProduct)
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