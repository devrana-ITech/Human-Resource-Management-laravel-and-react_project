import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Purchase = () => {
    const baseUrl="http://localhost/admin/"
    const [supplier, setSupplier]=useState([])
    const [selectSupplier, setSelectSupplier]=useState(null)
    const [warehouse, setWarehouse]=useState([])
    const [selectWarehouse, setSelectWarehouse]=useState(null)
    const [product, setProduct]=useState([])
    const [selectProduct, setSelectProduct]=useState(null)
    

    const handleChangeProduct=(e)=>{
      const {value}=e.target 
      setSelectProduct(JSON.parse(value))
      
    }

    const handleChangeWarehouse=(e)=>{
      const {value}=e.target 
      setSelectWarehouse(JSON.parse(value))
      
    }

    const handleChangeSupplier=(e)=>{
        const {value}=e.target
        setSelectSupplier(JSON.parse(value))
    }



    const fetchProduct=()=>{
      axios.get(baseUrl+"api/product/")
      .then((res)=>{
        console.log(res);
        setProduct(res.data.product)
        
      })
      .catch((err)=>{
        console.log(err);
        
      })
    }


    const fetchWarehouse=()=>{
      axios.get(baseUrl+"api/warehouse/")
      .then((res)=>{
        console.log(res);
        setWarehouse(res.data.warehouse)
        
      })
      .catch((err)=>{
        console.log(err);
        
      })
    }


    const fetchSupplier=()=>{
      axios.get(baseUrl+"api/supplier/")
      .then((res)=>{
        console.log(res);
        setSupplier(res.data.supplier)
      })
    }


    useEffect(()=>{
        fetchSupplier()
        fetchWarehouse()
        fetchProduct()
    },[])



    return (
        <>
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-header bg-info text-white text-left">
          <h1 className="mb-0">Create Purchase</h1>
        </div>
        <div className="card-body">
          {/* Invoice Details */}
          <div className="row mb-4">
            <div className="col-md-4">
              <h5>Supplier</h5>
              <select onChange={handleChangeSupplier} className="form-select mb-2">
                <option>Select Supplier</option>
                {
                    supplier?.map((data,i)=>{
                        return(
                            <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                        )
                    })
                }
              </select>
              <p className="mb-1">Phone: {selectSupplier && selectSupplier.phone} <span id="phone"></span></p>
              <p className="mb-1">Email: {selectSupplier && selectSupplier.email} <span id="phone"></span></p>
              <p>Address: {selectSupplier && selectSupplier.address}<span id="email"></span></p>
            </div>
            <div className="col-md-4">
              <h5>Warehouse</h5>
              <select onChange={handleChangeWarehouse} className="form-select" name='warehouse'>
                <option>Select Warehouse</option>
                {
                  warehouse?.map((data, i)=>{
                    return(
                      <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                    )
                  })
                }
              </select>
              <p className="mb-1">Phone: {selectWarehouse && selectWarehouse.phone} <span id="phone"></span></p>
              <p className="mb-1">Location: {selectWarehouse && selectWarehouse.location} <span id="phone"></span></p>
              <p>Address: {selectWarehouse && selectWarehouse.address}<span id="email"></span></p>
            </div>
            <div className="col-md-4">
              <h5>Invoice Details</h5>
              <p>Invoice No: <strong>#12345</strong></p>
              <p>Date: <strong>{new Date().toLocaleDateString()}</strong></p>
              <div>
                Delivery Date:
                <input type="date" className="form-control mt-1" />
              </div>
            </div>
          </div>
          {/* Product Table */}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Discount</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>
                  <select onChange={handleChangeProduct} className="form-select">
                    <option>Select Product</option>
                    {
                      product?.map((data,i)=>{
                        return(
                          <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                        )
                      })
                    }
                  </select>
                </td>
                <td><input type="number" className="form-control" placeholder="Qty" /></td>
                <td><input value= {selectProduct && selectProduct.offer_price} type="number" className="form-control" placeholder="Price" /></td>
                <td><input type="number" className="form-control" placeholder="Discount" /></td>
                <td>-</td>
                <td>
                  <button className="btn btn-info">Add</button>
                  </td>
              </tr>
            </thead>
            <tbody id="data_append">
              {/* Dynamically added rows will appear here */}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-end">Discount</td>
                <td>$0.00</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="4" className="text-end">Tax</td>
                <td>$0.00</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="4" className="text-end">Subtotal</td>
                <td>$0.00</td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="4" className="text-end fw-bold">Total</td>
                <td className="fw-bold">$0.00</td>
                <td></td>
                </tr>
            </tfoot>
          </table>

          {/* Footer Actions */}
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-danger">Clear All</button>
            <button className="btn btn-success">Process</button>
          </div>
        </div>
      </div>
    </div>

 
        </>
    );
};

export default Purchase;