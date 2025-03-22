import { useEffect, useState } from "react"
import axios from 'axios'
import Cart from './../../cartComponent/Cart';


const SetSalary = () => {
    let allowancecart = Cart('allowance');
    let deductioncart = Cart('deduction');

    
    const [employee, setEmployee]=useState([]);
    const [selectEmployee, setSelectEmployee]=useState(null);

    const [payslipItems, setPayslipItems]=useState([]);
   
    
    const handleChangeEmployee=(e)=>{
        const {value}=e.target 
        setSelectEmployee(JSON.parse(value))
        
      }

    const [allowanceitem, setAllowanceItem] = useState({
        payslip_items_name:"",
        item_id:0,
        amount: 0
    })

 const [allowanceitems, setAllowanceItems] = useState(allowancecart.getCart())

    const handleChangeAllowance=(e)=>{
        const {name, value}=e.target 
        let allowanceData=(JSON.parse(value))
        setAllowanceItem((props)=>({
          ...props,
          item_id: allowanceData.id,
          payslip_items_name:allowanceData.name,
          amount:allowanceData.amount

        }))
        
      }

      const handleSetAllItems = (e) => {
         //alert();
        allowancecart.save(allowanceitem)
        setAllowanceItems(allowancecart.getCart())
        setAllowanceItem({
          payslip_items_name:"",
          item_id:0,
          amount: 0
         })
       }

      const handleitemdelete=(id)=>{
    
        allowancecart.deleteItem(id)
        setAllowanceItems(allowancecart.getCart())
     }

     const handleDeleteAllItems=()=>{
      allowancecart.clearCart()
      setAllowanceItems(allowancecart.getCart())
     }




    const [deductionitem, setDeductionItem] = useState({
      payslip_items_name:"",
      item_id:0,
      amount: 0
    })

    const [deductionitems, setdeductionItems] = useState(deductioncart.getCart())

    const handleChangeDeduction=(e)=>{
      const {name, value}=e.target 
      let deductionData=(JSON.parse(value))
      setDeductionItem((props)=>({
        ...props,
        item_id:deductionData.id,
        payslip_items_name:deductionData.name,
        amount:deductionData.amount

      }))
      
      }


      const handleSetDeducAllItems = (e) => {
        //alert();
       deductioncart.save(deductionitem)
       setdeductionItems(deductioncart.getCart())
       setDeductionItem({
         payslip_items_name:"",
         item_id:0,
         amount: 0
        })
      }


      const handleitemdeducdelete=(id)=>{
    
        deductioncart.deleteItem(id)
        setdeductionItems(deductioncart.getCart())
     }

     const handleDeleteDeducAllItems=()=>{
      deductioncart.clearCart()
      setdeductionItems(deductioncart.getCart())
     }


    const [summaryCount, setSummaryCount] = useState({
      basicSalary:0,
      totalAllowance:0,
      totalDeduction:0,
      netSalary:0
    });

    let items = { ...allowanceitems, ...deductionitems };

    const calculateTotal = (items) => {
      return items.reduce((total, item) => total + (parseFloat(item.amount) || 0), 0);
    };

       const calcualtion = () => {
        
        const basicSalary = selectEmployee ? parseFloat(selectEmployee.salary) : 0;
        const totalAllowance = calculateTotal(allowanceitems); 
        const totalDeduction = calculateTotal(deductionitems); 
        const netSalary = basicSalary + totalAllowance - totalDeduction;
    
        setSummaryCount({
          basicSalary: basicSalary,
          totalAllowance: totalAllowance,
          totalDeduction: totalDeduction,
          netSalary: netSalary,
        })
       
    };
    
    
    useEffect(() => {
        calcualtion()
      }, [allowanceitems, deductionitems])
    
    



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




      const [payslipProcess, setPayslipProcess]=useState({
        employee_id:0,
        basic_salary:0,
        payslip_items:[],
        salary_month:0,
        total_working_days:0,
        working_days_attendance:0,
        leaves_taken:0,
        balance_leaves:0,
        total_earnings:0,
        total_deductions:0,
        net_salary:0,
        payment_method:0,
        statuses_id:0
       })

      let allowance = allowancecart.getCart();  
      let deduction = deductioncart.getCart();  
      let totalCart = [...deduction, ...allowance];  

      let setItems = {...setAllowanceItems, ...setdeductionItems};  


    const handleProcess=()=>{
      const data={
        employee_id:selectEmployee.id,
        basic_salary:parseFloat(summaryCount.basicSalary),
        payslip_items:totalCart,
        salary_month:payslipProcess.salary_month,
        total_working_days:payslipProcess.total_working_days,
        working_days_attendance:payslipProcess.working_days_attendance,
        leaves_taken: payslipProcess.leaves_taken,
        balance_leaves: payslipProcess.balance_leaves,
        total_earnings: parseFloat(summaryCount.totalAllowance),
        total_deductions: parseFloat(summaryCount.totalDeduction),
        net_salary: parseFloat(summaryCount.netSalary),
        payment_method: payslipProcess.payment_method,
        statuses_id: payslipProcess.statuses_id
      }

      console.log(data);
      axios.post("http://localhost/LARAVEL/LARAVEL_PROJECT/garment-manufacturing-erp/public/api/payslip", data)
      .then((res)=>{
        console.log(res);
        alert("Data has successfully saved");
         //setAllowanceItems(totalCart);  
         //setdeductionItems(totalCart);  
        setItems(totalCart);
      })
      .catch((err)=>{
        console.log(err);
      })
    }



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
          <input value={payslipProcess.salary_month}   onChange={(e) => setPayslipProcess({ ...payslipProcess, salary_month: e.target.value })} type="month" className="form-control salary_month" />
        </div>
      </div>
      {/* Employee Info */}
      <div className="row">
        <div className="col-md-6">
          <p><strong>Employee Name :</strong> {selectEmployee && selectEmployee.name}</p>
          <p><strong>Employee ID :</strong> {selectEmployee && selectEmployee.employee_id_number}</p>
          <p><strong>Employee Designation :</strong> {selectEmployee && selectEmployee.designations.name}</p>
          <p><strong>Employee Department :</strong> {selectEmployee && selectEmployee.department.name}</p>
          <p><strong>Employee Bank Account :</strong> {selectEmployee && selectEmployee.bank_accounts.account_number}</p>
          <p><strong>Employee Bank Name :</strong> {selectEmployee && selectEmployee.bank_accounts.bank_name}</p>
        </div>
        {/* Attendance Info */}
        <div className="col-md-6">
          <div className="form-group">
            <label>Total Working Days:</label>
            <input value={payslipProcess.total_working_days}   onChange={(e) => setPayslipProcess({ ...payslipProcess, total_working_days: e.target.value })} type="number" className="form-control total_working_days" defaultValue={30} />
          </div>
          <div className="form-group">
            <label>Working Days Attendance:</label>
            <input value={payslipProcess.working_days_attendance}   onChange={(e) => setPayslipProcess({ ...payslipProcess, working_days_attendance: e.target.value })} type="number" className="form-control working_days_attendance" defaultValue={28} />
          </div>
          <div className="form-group">
            <label>Leaves Taken:</label>
            <input value={payslipProcess.leaves_taken}   onChange={(e) => setPayslipProcess({ ...payslipProcess, leaves_taken: e.target.value })} type="number" className="form-control leaves_taken" defaultValue={2} />
          </div>
          <div className="form-group">
            <label>Balance Leaves:</label>
            <input value={payslipProcess.balance_leaves}   onChange={(e) => setPayslipProcess({ ...payslipProcess, balance_leaves: e.target.value })}  type="number" className="form-control balance_leaves" defaultValue={5} />
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
                    <th><button onClick={handleDeleteAllItems} className="btn bg-danger clearAll">ClearAll</button></th>
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
                      <input value={allowanceitem.amount} className="allowance_amount form-control" type="number" />
                    </td>
                    <td>
                      <button onClick={handleSetAllItems} className="btn btn-primary alowance_add_btn" id="alowance_add_btn">+</button>
                    </td>
                  </tr>
                </tbody>
                <tfoot className="dataAppend"> 
                {
                allowanceitems?.map((data, i) => (
                  <tr key={i}>
                    <td>{data.payslip_items_name}</td>
                    <td>{data.amount}</td>
                    <td><button onClick={()=>handleitemdelete(data.item_id)} className="btn btn-warning">-</button></td>
                  </tr>
                ))
              }
                </tfoot>
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
                    <th><button onClick={handleDeleteDeducAllItems} className="btn bg-danger Clear">ClearAll</button></th>
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
                      <input value={deductionitem.amount} className=" form-control deduction_amount" type="number"/>
                    </td>
                    <td>
                      <button onClick={handleSetDeducAllItems} className="btn btn-primary deduction_add_btn" id="deduction_add_btn">+</button>
                    </td>
                  </tr>
                </tbody>
                <tfoot className="dataAppended">
                {
                deductionitems?.map((data, i) => (
                  <tr key={i}>
                    <td>{data.payslip_items_name}</td>
                    <td>{data.amount}</td>
                    <td><button onClick={()=>handleitemdeducdelete(data.item_id)} className="btn btn-warning">-</button></td>
                  </tr>
                ))
              }
                </tfoot>
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
                  <input type="number" value={selectEmployee && selectEmployee.salary} className="form-control basic_salary" defaultValue={0.00} readOnly />
                </td>
              </tr>
              <tr>
                <th>Total Allowances</th>
                <td>
                  <input value={summaryCount.totalAllowance} type="number" id="total_allowance" className="form-control total_allowance" defaultValue={0.00} readOnly />
                </td>
              </tr>
              <tr>
                <th>Total Deductions</th>
                <td>
                  <input value={summaryCount.totalDeduction} type="number" className="form-control total_deduction" defaultValue={0.00} readOnly />
                </td>
              </tr>
              <tr>
                <th>Net Salary</th>
                <td>
                  <input value={summaryCount.netSalary} type="number" className="form-control net_salary" defaultValue={0.00} readOnly />
                </td>
              </tr>
              <tr>
                <th>Payment Method</th>
                <td>
                  <select value={payslipProcess.payment_method}   onChange={(e) => setPayslipProcess({ ...payslipProcess, payment_method: e.target.value })}  className="form-select payment_method">
                    <option>Select</option>
                    <option>Bank Transfer</option>
                    <option>Cash</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>Status</th>
                <td>
                  <input value={payslipProcess.statuses_id}   onChange={(e) => setPayslipProcess({ ...payslipProcess, statuses_id: e.target.value })}  type="text" className="form-control statuses_id" defaultValue="Paid" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button onClick={handleProcess}  className="btn btn-primary w-100 mt-3 btn-lg btn_process">Create Payslip</button>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default SetSalary



// value={payslipProcess.total_working_days}   onChange={(e) => setPayslipProcess({ ...payslipProcess, total_working_days: e.target.value })}
// value={payslipProcess.statuses_id}   onChange={(e) => setPayslipProcess({ ...payslipProcess, statuses_id: e.target.value })}
// value={payslipProcess.payment_method}   onChange={(e) => setPayslipProcess({ ...payslipProcess, payment_method: e.target.value })}
// value={payslipProcess.balance_leaves}   onChange={(e) => setPayslipProcess({ ...payslipProcess, balance_leaves: e.target.value })}
// value={payslipProcess.leaves_taken}   onChange={(e) => setPayslipProcess({ ...payslipProcess, leaves_taken: e.target.value })}
// value={payslipProcess.working_days_attendance}   onChange={(e) => setPayslipProcess({ ...payslipProcess, working_days_attendance: e.target.value })}
// onClick={handleProcess}