import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const ManageLeaveType = () => {

    const [leavetype, setLeaveType]=useState([])

    const fetchLeaveType=()=>{
        axios.get("http://localhost/LARAVEL/LARAVEL_PROJECT/garment-manufacturing-erp/public/api/leavetype")
        .then((res)=>{
            console.log(res);
            setLeaveType(res.data.leavetypes)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchLeaveType()
    },[])

  return (
    <>
    
<div className="card-body">
    <div className="table-responsive dataview">
      <table className="table dashboard-expired-products">
        <thead>
        <tr>
            <th>Id</th>
            <th>Leave Type</th>
            <th>Days</th>
            <th>Description</th>
            <th className="no-sort">Action</th>
        </tr>
        </thead>
        <tbody>
        {
            leavetype?.map((data, i)=>{
                return(
                <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.max_days }</td>
                    <td>{data.description}</td>
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

export default ManageLeaveType