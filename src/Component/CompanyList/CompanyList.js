import React, { useEffect, useState } from 'react';
import CardCompnay from '../CardCompnay/CardCompnay';
const CompanyList = () => {
    const [companyList, setCompanyList] = useState([])
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

    return (
        <div>
            <h1>This is company list:</h1>
            <div>
                {
                    companyList?
                    <div className='Company-list-grid'>
                        {
                            companyList.map(com=><CardCompnay key={com._id} company={com}></CardCompnay>)
                        }
                    </div>
                    :
                    <div><h1>Loading...</h1></div>
                }
            </div>
        </div>
    );
};

export default CompanyList;