import React, { useEffect, useState } from 'react';
import CompanyCard from '../CompanyCard/CompanyCard';

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
                console.log(data)
            })
    }, [])

    return (
        <div>
            {
                companyList
                    ?
                    companyList.map(company => {
                        <CompanyCard key={company._id} company={company}></CompanyCard>
                    })
                    :
                    <div><h1>Loading...</h1></div>
            }
        </div>
    );
};

export default CompanyList;