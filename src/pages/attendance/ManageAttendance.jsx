import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const ManageAttendance = () => {

    const [attendance, setAttendance]=useState([])

    const fetchAttendance=()=>{
        axios.get("https://laravel-project.ranaitech.info/public/api/attendance")
        .then((res)=>{
            console.log(res);
            setAttendance(res.data.attendances)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchAttendance()
    },[])

  return (
    <>
    <h2 className='mb-3'>Attendance List </h2>
    <div className="card-body">
    <div className="table-responsive dataview">
      <table className="table dashboard-expired-products">
        <thead>
        <tr>
            <th>Id</th>
            <th>Employee Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Clock_in</th>
            <th>Clock_out</th>
            <th>Late_Times</th>
            <th>Leave Days</th>
            <th>Leave Type</th>
            <th>Total_work_done</th>
            <th>Overtime_hours</th>
            <th className="no-sort">Action</th>
        </tr>
        </thead>
        <tbody>
        {
            attendance?.map((data, i)=>{
                return(
                <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.employee.name}</td>
                    <td>{data.date }</td>
                    <td>{data.statuses.name}</td>
                    <td>{data.clock_in}</td>
                    <td>{data.clock_out}</td>
                    <td>{data.late_times}</td>
                    <td>{data.leave_days}</td>
                    <td>{data.leave_times}</td>
                    <td>{data.total_work_hours}</td>
                    <td>{data.overtime_hours}</td>
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

export default ManageAttendance