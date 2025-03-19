import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const ManageDesignation = () => {
    const [designation, setDesignation]=useState([])

    const fetchDesignation=()=>{
        axios.get("http://localhost/LARAVEL/LARAVEL_PROJECT/garment-manufacturing-erp/public/api/designations")
        .then((res)=>{
            console.log(res);
            setDesignation(res.data.designations)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchDesignation()
    },[])

  return (
    <>
  <div className="card">
  <div className="card-body">
    <div className="table-responsive dataview">
      <table className="table dashboard-expired-products">
        <thead>
          <tr>
            <th>Id</th>
            <th>Designation Name</th>
            <th>Department Name</th>
            <th>Status</th>
            <th>Description</th>
            <th className="no-sort">Action</th>
          </tr>
        </thead>
        <tbody>
        {
            designation?.map((data, i)=>{
                return(
                <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.department_id}</td>
                    <td>{data.statuses_id }</td>
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
</div>

    
    </>
  )
}

export default ManageDesignation