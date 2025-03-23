import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const ManageSalarySheet = () => {
    
    const [Payslip, setPayslip]=useState([])

    const fetchPayslip=()=>{
        axios.get("https://laravel-project.ranaitech.info/public/api/payslipindex")
        .then((res)=>{
            console.log(res);
            setPayslip(res.data.payslips)
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }

    useEffect(()=>{
        fetchPayslip()
    },[])



  return (
    <>
    <h2 className='mb-3'>Salary Sheet List </h2>
<div className="card">
  <div className="card-body">
    <div className="table-responsive dataview">
      <table className="table dashboard-expired-products">
        <thead>
          <tr>
            <th>Id</th>
            {/* <th>EmployeeID</th> */}
            <th>Employee Name</th>
            <th>Salary Month</th>
            <th>Total Salary</th>
            <th>Status</th>
            <th className="no-sort">Action</th>
          </tr>
        </thead>
        <tbody>
        {
            Payslip?.map((data, i)=>{
                return(
                <tr key={i}>
                    <td>{data.id}</td>
                    {/* <td>{data.employee_id_number}</td> */}
                    <td>{data.employee.name}</td>
                    {/* <td>{data.employee?.name || 'N/A'}</td> */}
                    <td>{data.salary_month}</td>
                    <td>{data.net_salary}</td>
                    <td>{data.statuses_id}</td>
                    <td className='btn-group'>
                        <NavLink to={`/payslip/${data.id}`} className="btn btn-warning">Payslip</NavLink>
                    </td>
                </tr>
                )
            }) 
        }
        </tbody>
      </table>
    </div>
  </div>
</div>

    
    </>
  )
}

export default ManageSalarySheet