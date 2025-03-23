import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const ManageDepartment = () => {
    const [department, setDepartment]=useState([])

    const fetchDepartment=()=>{
        axios.get("https://laravel-project.ranaitech.info/public/api/departments")
        .then((res)=>{
            console.log(res);
            setDepartment(res.data.departments)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchDepartment()
    },[])

  return (
    <>
    <h2 className='mb-3'>Department List </h2>
     <div className="ms-auto mb-3">
          <div className="btn-group">
             <NavLink to='/departmentcreate'  className="btn btn-primary"><i className="bi bi-plus-circle"/>Manage Department</NavLink>
          </div>
        </div>
     <div className="card">
  <div className="card-body">
    <div className="table-responsive dataview">
      <table className="table dashboard-expired-products">
        <thead>
          <tr>
            <th>Id</th>
            <th>Department Name</th>
            <th>Status</th>
            <th className="no-sort">Action</th>
          </tr>
        </thead>
        <tbody>
        {
            department?.map((data, i)=>{
                return(
                <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.statuses.name }</td>
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
</div>

    
    </>
  )
}

export default ManageDepartment