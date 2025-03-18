import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
    <aside className="sidebar-wrapper" data-simplebar="true">
  <div className="sidebar-header">
    <div>
      <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
    </div>
    <div>
      <h4 className="logo-text">Snacked</h4>
    </div>
    <div className="toggle-icon ms-auto"> <i className="bi bi-list" />
    </div>
  </div>
  {/*navigation*/}
  <ul className="metismenu" id="menu">
    <li> 
    <NavLink to="/dashboard"> 
        <div className="parent-icon"><i className="bi bi-house-fill" />
        </div>
        <div className="menu-title">Dashboard</div>
        </NavLink>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon">
        </div>
        <div className="menu-title">Department</div>
      </a>
      <ul>
        <li> <a href="ecommerce-products-list.html"><i class="fa-solid fa-arrow-right"></i>Department List</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon">
        </div>
        <div className="menu-title">Designation</div>
      </a>
      <ul>
        <li> <NavLink to="/managesupplier"><i class="fa-solid fa-arrow-right"></i>Designation List</NavLink> 
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon">
        </div>
        <div className="menu-title">Employee</div>
      </a>
      <ul>
        <li> <a href="ecommerce-products-list.html"><i class="fa-solid fa-arrow-right"></i>Employee List</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon">
        </div>
        <div className="menu-title">Attendence</div>
      </a>
      <ul>
        <li> <a href="ecommerce-Attendence-list.html"><i class="fa-solid fa-arrow-right"></i>Attendence List</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon">
        </div>
        <div className="menu-title">Leave</div>
      </a>
      <ul>
        <li><NavLink to="/createproduction"><i class="fa-solid fa-arrow-right"></i>Leave Type</NavLink> 
        </li>
        <li> <NavLink to="/manageproduction"><i class="fa-solid fa-arrow-right"></i>Leave Application</NavLink>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon">
        </div>
        <div className="menu-title">Payroll</div>
      </a>
      <ul>
        <li><NavLink to="/setsalary"><i class="fa-solid fa-arrow-right"></i>Set Salary</NavLink>
        </li>
        <li> <NavLink to="/managesetsalary"><i class="fa-solid fa-arrow-right"></i>Payslip</NavLink>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon">
        </div>
        <div className="menu-title">Report</div>
      </a>
      <ul>
        <li> <a href="ecommerce-products-list.html"><i class="fa-solid fa-arrow-right"></i>Attendance Report</a>
        </li>
        <li> <a href="ecommerce-products-list.html"><i class="fa-solid fa-arrow-right"></i>Leave Report</a>
        </li>
        <li> <a href="ecommerce-products-list.html"><i class="fa-solid fa-arrow-right"></i>Payroll Report</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon">
        </div>
        <div className="menu-title">Admin Panel</div>
      </a>
      <ul>
        <li> <a href="ecommerce-products-list.html"><i class="fa-solid fa-arrow-right"></i>Admin Profile</a>
        </li>
        <li> <a href="ecommerce-products-list.html"><i class="fa-solid fa-arrow-right"></i>Setting</a>
        </li>
        <li> <a href="ecommerce-products-list.html"><i class="fa-solid fa-arrow-right"></i>Log Out</a>
        </li>
      </ul>
    </li>

  </ul>
  {/*end navigation*/}
</aside>

        </>
    );
};

export default Sidebar;