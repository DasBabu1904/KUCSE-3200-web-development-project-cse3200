import React, { useEffect, useState } from 'react';
import './BookProduct.css'
import { useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth();
const BookProduct = () => {
    const location = useLocation();
    const receivedData = location.state?.data || null;
    const product = receivedData.product
    const {
        name,
        productName,
        companyEmail,
        price
    } = product

    const [user, setUser] = useState(null);
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

    const [companyDetails, setCompanyDetails] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/get-one-company-details?email=${companyEmail}`, {
            method: 'GET',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                setCompanyDetails(data[0])
               
            })
    }, [])


    const {
        _id,
        address,
        size,
        services,
        contactNumber,
        employeeNum,
        email
    } = companyDetails;
    const companyName = companyDetails.name


    const hadleBookNow=(event)=>{
        event.preventDefault();
        const conf=window.confirm("Are you sure you want to book? ")
        if(conf){
            const orderInfo={
                customerEmail:user.email,
                productName:productName,
                companyEmail:email,
                id:product._id,
                orderBy:user.email,
                price:price
            }

            fetch('http://localhost:5000/place-order', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        }
    }
    return (

        <div  className='book-product'>
            <div className='book-product-flex'>
                <div className='book-porduct-col-left'>
                    <h1>Product Details</h1>
                    <h1>Product Name: {productName}</h1>
                    <h2>Manufactured By: {name}</h2>
                    <h3>Price: ${price}</h3>
                    <h4>Rating: </h4>
                </div>
                <div className='book-porduct-col-right'>
                    <table>
                        <tr>
                            <td>Company Name: </td>
                            <td>{companyName}</td>
                        </tr>
                        <tr>
                            <td>Address: </td>
                            <td>{address}</td>
                        </tr>
                        <tr>
                            <td>Services:</td>
                            <td>{services}</td>
                        </tr>
                        <tr>
                            <td>Company Size: $</td>
                            <td>{size}</td>
                        </tr>
                        <tr>
                            <td>Number of employee</td>
                            <td>{employeeNum}</td>
                        </tr>
                        <tr>
                            <td>Contact Number</td>
                            <td>{contactNumber}</td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>Registration ID: </td>
                            <td>{_id}</td>
                        </tr>

                    </table>
                </div>
            </div>

            <div>
            <form onSubmit={hadleBookNow} action="">
                   
                    <input className="Button booknow-button" type="submit" value="Book Now" />
                </form>
            </div>
        </div>
    );
};

export default BookProduct;