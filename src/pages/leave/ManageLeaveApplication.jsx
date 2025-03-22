import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const ManageLeaveApplication = () => {

    const [leaveapplication, setLeaveApplication]=useState([])

    const fetchLeaveApplication=()=>{
        axios.get("http://localhost/LARAVEL/LARAVEL_PROJECT/garment-manufacturing-erp/public/api/leaveapplication")
        .then((res)=>{
            console.log(res);
            setLeaveApplication(res.data.leaveapplications)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchLeaveApplication()
    },[])

  return (
    <>
    <h2 className='mb-3'>Leave Application List </h2>
     <div className="card-body">
    <div className="table-responsive dataview">
      <table className="table dashboard-expired-products">
        <thead>
        <tr>
            <th>Id</th>
            <th>Employee Name</th>
            <th>Leave Type</th>
            <th>Apply Date</th>
            <th>Leave Start Date</th>
            <th>Leave End Date</th>
            <th>Total Days</th>
            <th>Leave Status</th>
            <th>Duration</th>
            <th>Leave Reason</th>
            <th className="no-sort">Action</th>
        </tr>
        </thead>
        <tbody>
        {
            leaveapplication?.map((data, i)=>{
                return(
                <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.employee.name}</td>
                    <td>{data.leave_type.name }</td>
                    <td>{data.date}</td>
                    <td>{data.start_date}</td>
                    <td>{data.end_date}</td>
                    <td>{data.number_of_days}</td>
                    <td>{data.statuses.name}</td>
                    <td>{data.duration}</td>
                    <td>{data.reason}</td>
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

export default ManageLeaveApplication