import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const ManageSupplier = () => {
    const [supplier, setSupplier]=useState([])

    const fetchSupplier=()=>{
        axios.get("http://localhost/admin/api/supplier/")
        .then((res)=>{
            console.log(res);
            setSupplier(res.data.supplier)
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }

    useEffect(()=>{
        fetchSupplier()
    },[])

    const deleteData=(id)=>{
        const isConfirm=confirm("Are you sure delete this data")
        if(isConfirm){
            axios.get("http://localhost/admin/api/supplier/delete/" + id)
            .then(res => {
              console.log(res);
              fetchSupplier()
            })
            .catch(err => {
              console.log(err);
      
            })
        }else{
            console.log("Delete operation canceled");
            
        }
      
    }

    return (
        <>
            <div className="container">
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr className='bg-info '>
                            <th>Id</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        supplier?.map((data, i)=>{
                            return(
                            <tr key={i}>
                                <td>{data.id}</td>
                                <td>{data.photo && (<img src={"http://localhost/admin/img/supplier/"+data.photo} alt="" height={50} width={50} />) }</td>
                                <td>{data.name}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.address}</td>
                                <td className='btn-group'>
                                    <NavLink to={`show/${data.id}`} className="btn btn-info">Show</NavLink>
                                    <NavLink to={`update/${data.id}`} className="btn btn-primary">Edit</NavLink>
                                    <NavLink onClick={deleteData} className="btn btn-danger">Delete</NavLink>
                                </td>
                            </tr>
                            )
                        }) 
                       }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageSupplier;