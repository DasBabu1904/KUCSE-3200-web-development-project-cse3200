import React, { useEffect, useState } from 'react';
import './CompanyListAdmin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashArrowUp, faWrench } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import UpdateCompany from '../../UpdateCompany/UpdateCompany';
import AddCompany from '../../AddCompany/AddCompany';


const CompanyListAdmin = () => {
    const [op, setOp] = useState(0)
    const navigate = useNavigate()
    const [companyList, setCompanyList] = useState([]);
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
    }, [op])


    const handledeleteCompany = (company, event) => {
        const info = {
            name: company.name,
            email: company.email
        }
        fetch('http://localhost:5000/delete-company', {
            method: 'DELETE',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Company Data Successfully Deleted...!!!")
                window.location.reload();

            })
    }

    const hadleNavigation = (company, x) => {
        setOp(x)
    }
    const HandleFinish = (x) => {
        console.log("finish")
        setOp(x)
    }
    const LoadNav = () => {

        switch (op) {
            case 2:
                {
                    console.log(op)
                    // setOp(0)
                    return <UpdateCompany></UpdateCompany>
                }
            case 3:
                {
                    console.log(op)
                    // setOp(0)
                    return <AddCompany></AddCompany>
                }
            default:
                return null;
        }

    }


    return (
        <div>
            <h1>this is company list </h1>
            <div className='table-companylist-admin'>
                <table>
                    {companyList.map(company =>
                        <tr>
                            <td>{company.name}</td>
                            <td>{company.address}</td>
                            <td>{company.email}</td>


                            {/* delete button */}

                            <td onClick={() => handledeleteCompany(company)} className='admin-company-delete-button'><FontAwesomeIcon icon={faTrashArrowUp}></FontAwesomeIcon></td>


                            {/* update button */}

                            <td onClick={() => hadleNavigation(company, 2)} className=''><FontAwesomeIcon icon={faWrench}></FontAwesomeIcon></td>
                        </tr>
                    )}
                </table>
            </div>
            {op == 2 ?
                <>
                    <UpdateCompany></UpdateCompany>
                    <div className='finish-button-admin'>
                        <div className='Button' onClick={() => HandleFinish(0)}>Finish</div>
                    </div>
                </>
                :
                <>
                    {
                        op == 3 ?
                            <>
                                <AddCompany></AddCompany>
                                <div className='finish-button-admin'>
                                    <div className='Button' onClick={() => HandleFinish(0)}>Finish</div>
                                </div>
                            </>

                            :
                            <>
                                <div className='finish-button-admin'>
                                    <div className='Button' onClick={() => HandleFinish(3)}>Add New One</div>
                                </div>
                            </>
                    }
                </>
            }
        </div>
    );
};

export default CompanyListAdmin;