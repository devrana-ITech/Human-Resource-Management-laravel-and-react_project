import React from 'react'

const Dashboard = () => {
  return (
    <>
 <div>
  <div className="container mt-0 mb-4 homeContents">
    <div className="row align-items-center header-bar">
      <div className="col-md-8">
        <h4 className="bg-info p-3">Welcome to Lunea Todd</h4>
      </div>
      <div className="col-md-2  text-center float-end clock bg-primary rounded">
        <div id="clock" />
        <div id="day" />
        {'{'}{'{'}-- <span id="clock" /> --{'}'}{'}'}
      </div>
      <div className="col-md-2 text-center">
        <a id="clockButton" className="btn btn-warning btn-lg p-4" href="javascript:void(0);" onclick="clockIn()">Clock In</a>
        <a id="clockOutButton" className="btn btn-danger btn-lg p-4 " href="javascript:void(0);" onclick="clockOut()" style={{display: 'none'}}>Clock Out</a>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
      <div className="col">
        <div className="card text-center bg-warning">
          <div className="card-header border-0 pb-0">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="mb-0 text-white fs-4 text-primary">Employee</h6>
            </div>
            <div className="card-header-right">
              <div className="btn-group card-option">
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="#" className="dropdown-item"><i className="ti ti-edit" /> Edit</a>
                  <form method="POST" action="#">
                    <input name="_method" type="hidden" defaultValue="DELETE" />
                    <a href="#" className="dropdown-item" title="Delete"><i className="ti ti-trash" />
                      Delete</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="avatar">
              <img src="{{asset('assets')}}/img/1740835090_avatar-11.png" className="img-fluid mx-4 rounded border-2 border-primary" width="200px" height="200px" />
            </div>
            <h4 className="mt-2 text-primary justify-content-center text-white">Lunea Todd</h4>
            <small className="text-white">CEO</small>
            <div className="row mt-2">
              <div className="col-12">
                <a className="btn btn-outline-primary text-white mx-5" href>#EMP0000002</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card rounded-1 bg-danger">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="text-white">
                <h2 className="mb-0 text-center">12</h2>
                <p className="mb-1">Total Task</p>
                <p className="mb-0 mt-2 font-13"><i className="bi bi-arrow-up" /><span>From last Month</span></p>
              </div>
              <div className="ms-auto widget-icon bg-info text-white">
                <i className="nav-icon fas fa-people-carry" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card rounded-1 bg-primary">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="text-white">
                <h2 className="mb-0 text-center">5</h2>
                <p className="mb-1">Total Project</p>
                <p className="mb-0 mt-2 font-13"><i className="bi bi-arrow-up" /><span>From last Month</span></p>
              </div>
              <div className="ms-auto widget-icon bg-info text-white">
                <i className="fa-solid fa-person-military-pointing" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card rounded-1 bg-success">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="text-white ">
                <h2 className="mb-0 text-center">12</h2>
                <p className="mb-1">Total Leave</p>
                <p className="mb-0 mt-2 font-13"><i className="bi bi-arrow-up" /><span>From last Month</span></p>
              </div>
              <div className="ms-auto widget-icon bg-info text-white">
                <i className="nav-icon fas fa-chart-bar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




    </>
  )
}

export default Dashboard