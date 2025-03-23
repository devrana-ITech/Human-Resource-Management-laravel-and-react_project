import React, { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const CreateDepartment = () => {
    const [department, setDepartment]=useState({
            name:"",
            description:"",
        })

        const handleChange=(e)=>{
            const {name, value}=e.target

            setDepartment((props)=>({
                ...props,
                [name]:value
            }))
            
        }
           
        const handleSubmit=(e)=>{
            e.preventDefault();
        
            const supFormData = new FormData();
            supFormData.append("name", department.name)
            supFormData.append("description", department.phone)
        
            axios.post("https://laravel-project.ranaitech.info/public/api/departmentcreate",supFormData)
            .then((res)=>{
                console.log(res);
                setDepartment({
                  name:"",
                  description:""
                })
               
            })
            .catch((error)=>{
                console.log(error);
                
            })
        }
    
  return (
    <>
   <main className="container">
  {/*breadcrumb*/}
  <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
    <div className="breadcrumb-title pe-3">CREATE DEPARTMENT</div>
    <div className="ps-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0 p-0">
          <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /></a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Add a new Department</li>
        </ol>
      </nav>
    </div>
    <div className="ms-auto">
      <div className="btn-group">
         <NavLink to='/departments'  className="btn btn-primary"><i className="bi bi-arrow-left" />Go Back</NavLink>
      </div>
    </div>
  </div>
  {/*end breadcrumb*/}
  <div className="row">
    <div className="col-xl-11 mx-auto">
      <div className="card">
        <div className="card-body">
          <h6 className="mb-0 text-uppercase">Add a new Department</h6>
          <div className="p-4 border rounded mt-4">
          <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input onChange={handleChange} type="text" className="form-control" id="name" name='name' />
  </div>
 
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Description</label>
    <input onChange={handleChange} type="text" className="form-control" id="name" name='name' />
  </div>
 
  <button type="submit" className="btn btn-primary"><i class="bi bi-save"></i> Save Department</button>
</form>
          </div>
        </div>
      </div>
      </div>
      </div>
      </main>
    
    
    
    </>
  )
}

export default CreateDepartment