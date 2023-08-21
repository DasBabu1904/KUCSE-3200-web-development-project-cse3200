import React, { useEffect, useState } from 'react';
import './Search.css'
import CardProduct from '../CardProduct/CardProduct';

const Search = () => {
    const [company, setCompany] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([])
    useEffect(() => {
        fetch('fakecompany.json')
            .then(res => res.json())
            .then(data => setCompany(data))
    }, [])
    let searchkey = ''
    const HandleSesarch = (event) => {
        event.preventDefault();
        searchkey = ''
        searchkey = (event.target.keywordsearch.value).toLowerCase()
        const filetered = company.filter(item => item.sercive_name == searchkey)
        setDisplayProduct(filetered)
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
                        <div>
                            {
                                    displayProduct.map(product=><CardProduct key={product._id} product={product}></CardProduct>)      
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