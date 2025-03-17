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
      <a href="javascript:;" className="has-arroww">
        <div className="parent-icon"><i className="bi bi-house-fill" />
        </div>
        <div className="menu-title">Dashboard</div>
      </a>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket2-fill" />
        </div>
        <div className="menu-title">User</div>
      </a>
      <ul>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />User List</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket2-fill" />
        </div>
        <div className="menu-title">Supplier</div>
      </a>
      <ul>
        <li> <NavLink to="/managesupplier"><i className="bi bi-circle" />Supplier List</NavLink> 
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket2-fill" />
        </div>
        <div className="menu-title">Customer</div>
      </a>
      <ul>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Customer List</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket2-fill" />
        </div>
        <div className="menu-title">Products</div>
      </a>
      <ul>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Products List</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket2-fill" />
        </div>
        <div className="menu-title">Raw Materials</div>
      </a>
      <ul>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Raw Materials Create</a>
        </li>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Raw Materials Details</a>
        </li>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Build Products</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket2-fill" />
        </div>
        <div className="menu-title">Purchase</div>
      </a>
      <ul>
        <li><NavLink to="/purchase"><i className="bi bi-circle" />Purchase Create</NavLink>
        </li>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Purchase Details</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket2-fill" />
        </div>
        <div className="menu-title">Sales</div>
      </a>
      <ul>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Create Sales</a>
        </li>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Sales Details</a>
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