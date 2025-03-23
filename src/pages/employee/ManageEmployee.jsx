import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const ManageEmployee = () => {
    const [employee, setEmployee]=useState([])

    const fetchEmployee=()=>{
        axios.get("https://laravel-project.ranaitech.info/public/api/employeeapi")
        .then((res)=>{
            console.log(res);
            setEmployee(res.data.employees)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchEmployee()
    },[])



  return (
    <>
    <h2 className='mb-3'>Employee List </h2>
   <div className="card-body">
  <div className="table-responsive dataview">
    <table className="table dashboard-expired-products">
      <thead>
        <tr>
          <th>Id</th>
          <th>EmployeeID</th>
          <th>Employee Name</th>
          <th>Email Number</th>
          <th>Phone Number</th>
          <th>Gender</th>
          <th>Department Name</th>
          <th>Designations Name</th>
          <th>Statuses</th>
          <th>Joining Date</th>
          <th className="no-sort">Action</th>
        </tr>
      </thead>
      <tbody>
      {
            employee?.map((data, i)=>{
                return(
                <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.employee_id_number}</td>
                    <td>{data.name}</td>
                    <td>{data.email }</td>
                    <td>{data.phone}</td>
                    <td>{data.gender}</td>
                    <td>{data.department.name}</td>
                    <td>{data.designations.name}</td>
                    <td>{data.statuses.name}</td>
                    <td>{data.joining_date}</td>
                    <td className='btn-group'>
                        <NavLink to="show" className="btn btn-info">Show</NavLink>
                        <NavLink to="edit" className="btn btn-success">Edit</NavLink>
                        <NavLink to="delete" className="btn btn-danger">Delete</NavLink>
                    </td>
                </tr>
                )
            }) 
        }
      </tbody>
    </table>
  </div>
</div>

    </>
  )
}

export default ManageEmployee