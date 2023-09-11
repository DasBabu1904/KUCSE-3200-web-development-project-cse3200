import React, { useEffect, useState } from 'react';
import CardCompnay from '../CardCompnay/CardCompnay';
import './CompanyList.css'
import { useNavigate } from 'react-router-dom';
const CompanyList = () => {
    const [companyList, setCompanyList] = useState([])
    const navigate=useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/get-company-list', {
            method: 'GET',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                setCompanyList(data)
            })
    }, [])
    //handle functions to get navigate to the db editors
    
    const handleCompanyAdd=(event)=>{
        event.preventDefault()
        navigate('/add-company')
    }
    const handleCompanyUpdate=(event)=>{
        event.preventDefault()
        console.log("Update")
        navigate('/update-company')
    }
    const handleCompanyDelete=(event)=>{
        event.preventDefault()
        navigate('/delete-company')
    }
    return (
        <div>
            <h1>This is company list:</h1>
            <div>
                {
                    companyList ?
                        <div className='Company-list-grid'>
                            {
                                companyList.map(com => <CardCompnay key={com._id} company={com}></CardCompnay>)
                            }
                        </div>
                        :
                        <div><h1>Loading...</h1></div>
                }
            </div>

            {/*-----------------------------------------------------------
             Db update buttons  
             -------------------------------------------------------------*/}
             
            {/* <div className='grid-company-db-buttons'>
                <button className='Button buttons-conmpany-list-to-nav-database-modifcation' onClick={handleCompanyUpdate}>Update Company</button>
                <button className='Button buttons-conmpany-list-to-nav-database-modifcation' onClick={handleCompanyAdd}>Add new Company</button>
                <button style={{marginBottom:"30px"}} className='Button buttons-conmpany-list-to-nav-database-modifcation' onClick={handleCompanyDelete}>Delete A company </button>
            </div> */}

        </div>
    );
};

export default CompanyList;