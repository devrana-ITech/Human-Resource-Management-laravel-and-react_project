

const Payslip = () => {

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
<div className="card-body" id="section-to-print">
  <div id="viewData">
    <div className="px-5">
      <table width="99%">
        <tbody>
          <tr>
            <td width="50%"><h2>Company Name</h2>
              <p>123 Business Rd<br />City, State, ZIP<br />Email: info@company.com<br />Phone: (123) 456-7890</p></td>
            <td width="50%" className="text-center">
              <img src="https://hrm.bdtask-demoserver.com/storage/application/1716986808logo.jpg" />
              <h4 className="mt-3">Bdtask HRM <span className="text-uppercase">(Payslip)</span> </h4>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="row">
        <div className="text-center bg-info fs-3 p-3 rounded-2">Employee Salary Slip</div>
        <table width="99%" className="payrollDatatableReport table table-bordered">
          <tbody>
            <tr className="text-start">
              <th>Employee name</th>
              <td>Hasan</td>
              <th>Month</th>
              <td>March, 2025</td>
            </tr>
            <tr className="text-start">
              <th>Employee ID</th>
              <td>#EMP0000002</td>
              <th>Total Working Days:</th>
              <td>22</td>
            </tr>
            <tr className="text-start">
              <th>Employee Designation</th>
              <td>Managing Director</td>
              <th>Working Days Attendance:</th>
              <td>20</td>
            </tr>
            <tr className="text-start">
              <th>Employee Department</th>
              <td>The Pre-Production</td>
              <th>Leaves Taken</th>
              <td>2</td>
            </tr>
            <tr>
              <th>Employee Bank Account</th>
              <td>123456789</td>
              <th>Balance Leaves</th>
              <td>8</td>
            </tr>
            <tr className="text-start">
              <th>Employee Bank Name</th>
              <td>Duch Bangla Bank</td>
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="payroll-summary">
          <div className="description">
            <h5 className="bg-success p-3 text-center rounded-2">Allowance</h5>
            <table width="100%" className="table table-striped">
              <tbody>
                <tr>
                  <td>House Rent Allowance (HRA)</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>Medical Allowance</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>Festival Allowance</td>
                  <td>1000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="deduction">
            <h5 className=" bg-danger p-3 text-center rounded-2">Deduction</h5>
            <table width="100%" className="table table-striped">
              <tbody>
                <tr>
                  <td>Provident Fund (PF)</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Income Tax (TDS)</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Absenteeism</td>
                  <td>500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="summary-box mt-3 card p-2">
          <h5 className="card-header bg-warning text-white text-center fs-4 rounded-2">Summary</h5>
          <div className="table-responsive">
            <table className="table table-striped text-center">
              <tbody className="text-center">
                <tr>
                  <th style={{width: '30%'}}>Basic Salary</th>
                  <td>40000.00</td>
                </tr>
                <tr>
                  <th>Total Allowances</th>
                  <td>3000.00</td>
                </tr>
                <tr>
                  <th>Total Deductions</th>
                  <td>1500.00</td>
                </tr>
                <tr>
                  <th>Net Salary</th>
                  <td>41500.00</td>
                </tr>
                <tr>
                  <th>Payment Method</th>
                  <td>Bank Transfer</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>Paid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <table width="100%" className="mt-5">
        <tbody>
          <tr>
            <td className width="33%">
              <div className="border-top mx-5 text-center">Prepared by: <b>Admin</b></div>
            </td>
            <td width="33%">
              <div className="border-top mx-5 text-center">Checked by</div>
            </td>
            <td width="33%">
              <div className="border-top mx-5 text-center">Authorized by</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<div className="text-center mt-4">
  <button onClick={handlePrint} className="btn btn-primary"> Print Payslip</button>
</div>

    </>
  )
}

export default Payslip