import { useEffect, useState } from "react"
import axios from 'axios'
import Cart from './../../cartComponent/Cart';


const SetSalary = () => {
    const allowancecart = Cart('allowance');
    const deductioncart = Cart('deduction');

    
    const [employee, setEmployee]=useState([]);
    const [selectEmployee, setSelectEmployee]=useState(null);

    const [payslipItems, setPayslipItems]=useState([]);
   


    
    const handleChangeEmployee=(e)=>{
        const {value}=e.target 
        setSelectEmployee(JSON.parse(value))
        
      }

    const [allowanceitem, setAllowanceItem] = useState({
        payslip_items_name:"",
        amount: 0
    })

 const [allowanceitems, setAllowanceItems] = useState(allowancecart.getCart())

    const handleChangeAllowance=(e)=>{
        const {value}=e.target 
        setSelectAllowanceItems(JSON.parse(value))
        
      }

    const handleChangeDeduction=(e)=>{
        const {value}=e.target 
        setSelectDeductionItems(JSON.parse(value))
        
      }

    const fetchEmployee=()=>{
        axios.get("http://localhost/LARAVEL/LARAVEL_PROJECT/garment-manufacturing-erp/public/api/employeeapi")
        .then((res)=>{
          console.log(res);
          setEmployee(res.data.employees)
          
        })
        .catch((err)=>{
          console.log(err);
          
        })
      }

    const fetchPayslip_Items=()=>{
        axios.get("http://localhost/LARAVEL/LARAVEL_PROJECT/garment-manufacturing-erp/public/api/payslip_itemsapi")
        .then((res)=>{
          console.log(res);
          setPayslipItems(res.data.payslip_items)
          
        })
        .catch((err)=>{
          console.log(err);
          
        })
      }

      useEffect(() => {
        fetchEmployee()
        fetchPayslip_Items()
        }, [])




  return (
    <>
   <div className="container salary-slip-container">
  <div className="card w-100" style={{maxWidth: 900}}>
    <div className="card-header bg-info text-center p-3 fs-3">
      Employee Salary Slip
    </div>
    <div className="card-body">
      {/* Employee Details Section */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="employee_id">Select Employee:</label>
          <select onChange={handleChangeEmployee} className="form-select employee_id" name="employee" id="employee_id">
            <option value>Select Employee</option>
            {
                    employee?.map((data)=>{
                        return(
                          <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                      )
                    })
                }
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <label>Month:</label>
          <input type="month" className="form-control salary_month" />
        </div>
      </div>
      {/* Employee Info */}
      <div className="row">
        <div className="col-md-6">
          <p><strong>Employee Name :</strong> {selectEmployee && selectEmployee.name}</p>
          <p><strong>Employee ID :</strong> {selectEmployee && selectEmployee.employee_id_number}</p>
          <p><strong>Employee Designation :</strong> {selectEmployee && selectEmployee.designations_id}</p>
          <p><strong>Employee Department :</strong> {selectEmployee && selectEmployee.department_id}</p>
          <p><strong>Employee Bank Account :</strong> {selectEmployee && selectEmployee.bank_accounts_id}</p>
          <p><strong>Employee Bank Name :</strong> {selectEmployee && selectEmployee.bank_accounts_id}</p>
        </div>
        {/* Attendance Info */}
        <div className="col-md-6">
          <div className="form-group">
            <label>Total Working Days:</label>
            <input type="number" className="form-control total_working_days" defaultValue={30} />
          </div>
          <div className="form-group">
            <label>Working Days Attendance:</label>
            <input type="number" className="form-control working_days_attendance" defaultValue={28} />
          </div>
          <div className="form-group">
            <label>Leaves Taken:</label>
            <input type="number" className="form-control leaves_taken" defaultValue={2} />
          </div>
          <div className="form-group">
            <label>Balance Leaves:</label>
            <input type="number" className="form-control balance_leaves" defaultValue={5} />
          </div>
        </div>
      </div>
      {/* Allowances and Deductions */}
      <div className="row">
        {/* Allowances */}
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header bg-success text-white text-center p-1 fs-4">Allowances</div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Allowance Item</th>
                    <th>Amount</th>
                    <th><button className="btn bg-danger clearAll">ClearAll</button></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select onChange={handleChangeAllowance} className="form-select payslip_items_id" id="allowance_items" name="payslip_items_id">
                        <option value>Select Allowance</option>
                        {
                            payslipItems?.map((data)=>{
                                if(data.factor==1){
                                    return(
                                      <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                                  )
                                  }  
                            })
                        }
                        
                      </select>
                    </td>
                    <td>
                      <input className="allowance_amount form-control" type="number" defaultValue={1000} />
                    </td>
                    <td>
                      <button className="btn btn-primary alowance_add_btn" id="alowance_add_btn">+</button>
                    </td>
                  </tr>
                </tbody>
                <tfoot className="dataAppend"> </tfoot>
              </table>
              <hr />
              <h4 className="text-center bg-info p-1 mb-2">Other Allowance</h4>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Other Allowance</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" className="form-control" placeholder="Other Allowance" />
                    </td>
                    <td>
                      <input type="number" className="form-control" placeholder="Amount" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Deductions */}
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-header bg-danger text-white text-center p-1 fs-4">Deductions</div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Deduction Items</th>
                    <th>Amount</th>
                    <th><button className="btn bg-danger Clear">ClearAll</button></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select onChange={handleChangeDeduction} className="form-select payslip_items_id" id="deduction_items" name="payslip_items_id">
                        <option value>Select Deductions</option>
                        {
                            payslipItems?.map((data)=>{
                                if(data.factor==-1){
                                    return(
                                      <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                                  )
                                  }  
                            })
                        }
                        
                      </select>
                    </td>
                    <td>
                      <input className=" form-control deduction_amount" type="number" defaultValue={500} />
                    </td>
                    <td>
                      <button className="btn btn-primary deduction_add_btn" id="deduction_add_btn">+</button>
                    </td>
                  </tr>
                </tbody>
                <tfoot className="dataAppended"> </tfoot>
              </table>
              <hr />
              <h4 className="text-center bg-info p-1 mb-2">Other Deduction</h4>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Other Deduction</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" className="form-control" placeholder="Other Allowance" />
                    </td>
                    <td>
                      <input type="number" className="form-control" placeholder="Amount" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Summary Section */}
      <div className="summary-box mt-3 card p-3">
        <h5 className="card-header bg-warning text-white text-center p-2 fs-4">Summary</h5>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th style={{width: '30%'}}>Basic Salary</th>
                <td>
                  <input type="number" className="form-control basic_salary" defaultValue={0.00} readOnly />
                </td>
              </tr>
              <tr>
                <th>Total Allowances</th>
                <td>
                  <input type="number" id="total_allowance" className="form-control total_allowance" defaultValue={0.00} readOnly />
                </td>
              </tr>
              <tr>
                <th>Total Deductions</th>
                <td>
                  <input type="number" className="form-control total_deduction" defaultValue={0.00} readOnly />
                </td>
              </tr>
              <tr>
                <th>Net Salary</th>
                <td>
                  <input type="number" className="form-control net_salary" defaultValue={0.00} readOnly />
                </td>
              </tr>
              <tr>
                <th>Payment Method</th>
                <td>
                  <select className="form-select payment_method">
                    <option>Select</option>
                    <option>Bank Transfer</option>
                    <option>Cash</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>Status</th>
                <td>
                  <input type="text" className="form-control statuses_id" defaultValue="Paid" readOnly />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="btn btn-primary w-100 mt-3 btn-lg btn_process">Create Payslip</button>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default SetSalary