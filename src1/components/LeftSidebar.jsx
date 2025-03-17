import React from 'react'
import { NavLink } from 'react-router-dom'

const LeftSidebar = () => {
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
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-house-fill" />
        </div>
        <div className="menu-title">Dashboard</div>
      </a>
      <ul>
        {/* <li> <a href="index.html"><i className="bi bi-circle" />Default</a>
        </li> */}
          <li> <NavLink to="/purchase"><i className="bi bi-circle" />Purchase</NavLink>
        </li>
        <li> <a href="index2.html"><i className="bi bi-circle" />Alternate</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-grid-fill" />
        </div>
        <div className="menu-title">Application</div>
      </a>
      <ul>
        <li> <a href="app-emailbox.html"><i className="bi bi-circle" />Email</a>
        </li>
        <li> <a href="app-chat-box.html"><i className="bi bi-circle" />Chat Box</a>
        </li>
        <li> <a href="app-file-manager.html"><i className="bi bi-circle" />File Manager</a>
        </li>
        <li> <a href="app-to-do.html"><i className="bi bi-circle" />Todo List</a>
        </li>
        <li> <a href="app-invoice.html"><i className="bi bi-circle" />Invoice</a>
        </li>
        <li> <a href="app-fullcalender.html"><i className="bi bi-circle" />Calendar</a>
        </li>
      </ul>
    </li>
    <li className="menu-label">UI Elements</li>
    <li>
      <a href="widgets.html">
        <div className="parent-icon"><i className="bi bi-droplet-fill" />
        </div>
        <div className="menu-title">Widgets</div>
      </a>
    </li>
    <li>
      <a href="javascript:;" className="has-arrow">
        <div className="parent-icon"><i className="bi bi-basket2-fill" />
        </div>
        <div className="menu-title">eCommerce</div>
      </a>
      <ul>
        <li> <a href="ecommerce-products-list.html"><i className="bi bi-circle" />Products List</a>
        </li>
        <li> <a href="ecommerce-products-grid.html"><i className="bi bi-circle" />Products Grid</a>
        </li>
        <li> <a href="ecommerce-products-categories.html"><i className="bi bi-circle" />Categories</a>
        </li>
        <li> <a href="ecommerce-orders.html"><i className="bi bi-circle" />Orders</a>
        </li>
        <li> <a href="ecommerce-orders-detail.html"><i className="bi bi-circle" />Order details</a>
        </li>
        <li> <a href="ecommerce-add-new-product.html"><i className="bi bi-circle" />Add New Product</a>
        </li>
        <li> <a href="ecommerce-add-new-product-2.html"><i className="bi bi-circle" />Add New Product 2</a>
        </li>
        <li> <a href="ecommerce-transactions.html"><i className="bi bi-circle" />Transactions</a>
        </li>
      </ul>
    </li>
    <li>
      <a className="has-arrow" href="javascript:;">
        <div className="parent-icon"><i className="bi bi-award-fill" />
        </div>
        <div className="menu-title">Components</div>
      </a>
      <ul>
        <li> <a href="component-alerts.html"><i className="bi bi-circle" />Alerts</a>
        </li>
        <li> <a href="component-accordions.html"><i className="bi bi-circle" />Accordions</a>
        </li>
        <li> <a href="component-badges.html"><i className="bi bi-circle" />Badges</a>
        </li>
        <li> <a href="component-buttons.html"><i className="bi bi-circle" />Buttons</a>
        </li>
        <li> <a href="component-cards.html"><i className="bi bi-circle" />Cards</a>
        </li>
        <li> <a href="component-carousels.html"><i className="bi bi-circle" />Carousels</a>
        </li>
        <li> <a href="component-list-groups.html"><i className="bi bi-circle" />List Groups</a>
        </li>
        <li> <a href="component-media-object.html"><i className="bi bi-circle" />Media Objects</a>
        </li>
        <li> <a href="component-modals.html"><i className="bi bi-circle" />Modals</a>
        </li>
        <li> <a href="component-navs-tabs.html"><i className="bi bi-circle" />Navs &amp; Tabs</a>
        </li>
        <li> <a href="component-navbar.html"><i className="bi bi-circle" />Navbar</a>
        </li>
        <li> <a href="component-paginations.html"><i className="bi bi-circle" />Pagination</a>
        </li>
        <li> <a href="component-popovers-tooltips.html"><i className="bi bi-circle" />Popovers &amp; Tooltips</a>
        </li>
        <li> <a href="component-progress-bars.html"><i className="bi bi-circle" />Progress</a>
        </li>
        <li> <a href="component-spinners.html"><i className="bi bi-circle" />Spinners</a>
        </li>
        <li> <a href="component-notifications.html"><i className="bi bi-circle" />Notifications</a>
        </li>
        <li> <a href="component-avtars-chips.html"><i className="bi bi-circle" />Avatrs &amp; Chips</a>
        </li>
      </ul>
    </li>
    <li>
      <a className="has-arrow" href="javascript:;">
        <div className="parent-icon"><i className="bi bi-cloud-arrow-down-fill" />
        </div>
        <div className="menu-title">Icons</div>
      </a>
      <ul>
        <li> <a href="icons-line-icons.html"><i className="bi bi-circle" />Line Icons</a>
        </li>
        <li> <a href="icons-boxicons.html"><i className="bi bi-circle" />Boxicons</a>
        </li>
        <li> <a href="icons-feather-icons.html"><i className="bi bi-circle" />Feather Icons</a>
        </li>
      </ul>
    </li>
    <li className="menu-label">Forms &amp; Tables</li>
    <li>
      <a className="has-arrow" href="javascript:;">
        <div className="parent-icon"><i className="bi bi-file-earmark-break-fill" />
        </div>
        <div className="menu-title">Forms</div>
      </a>
      <ul>
        <li> <a href="form-elements.html"><i className="bi bi-circle" />Form Elements</a>
        </li>
        <li> <a href="form-input-group.html"><i className="bi bi-circle" />Input Groups</a>
        </li>
        <li> <a href="form-layouts.html"><i className="bi bi-circle" />Forms Layouts</a>
        </li>
        <li> <a href="form-validations.html"><i className="bi bi-circle" />Form Validation</a>
        </li>
        <li> <a href="form-wizard.html"><i className="bi bi-circle" />Form Wizard</a>
        </li>
        <li> <a href="form-date-time-pickes.html"><i className="bi bi-circle" />Date Pickers</a>
        </li>
        <li> <a href="form-select2.html"><i className="bi bi-circle" />Select2</a>
        </li>
      </ul>
    </li>
    <li>
      <a className="has-arrow" href="javascript:;">
        <div className="parent-icon"><i className="bi bi-file-earmark-spreadsheet-fill" />
        </div>
        <div className="menu-title">Tables</div>
      </a>
      <ul>
        <li> <a href="table-basic-table.html"><i className="bi bi-circle" />Basic Table</a>
        </li>
        <li> <a href="table-advance-tables.html"><i className="bi bi-circle" />Advance Tables</a>
        </li>
        <li> <a href="table-datatable.html"><i className="bi bi-circle" />Data Table</a>
        </li>
      </ul>
    </li>
    <li className="menu-label">Pages</li>
    <li>
      <a className="has-arrow" href="javascript:;">
        <div className="parent-icon"><i className="bi bi-lock-fill" />
        </div>
        <div className="menu-title">Authentication</div>
      </a>
      <ul>
        <li> <a href="authentication-signin.html" target="_blank"><i className="bi bi-circle" />Sign In</a>
        </li>
        <li> <a href="authentication-signup.html" target="_blank"><i className="bi bi-circle" />Sign Up</a>
        </li>
        <li> <a href="authentication-forgot-password.html" target="_blank"><i className="bi bi-circle" />Forgot Password</a>
        </li>
        <li> <a href="authentication-reset-password.html" target="_blank"><i className="bi bi-circle" />Reset Password</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="pages-user-profile.html">
        <div className="parent-icon"><i className="bi bi-person-lines-fill" />
        </div>
        <div className="menu-title">User Profile</div>
      </a>
    </li>
    <li>
      <a href="pages-timeline.html">
        <div className="parent-icon"><i className="bi bi-collection-play-fill" />
        </div>
        <div className="menu-title">Timeline</div>
      </a>
    </li>
    <li>
      <a className="has-arrow" href="javascript:;">
        <div className="parent-icon"><i className="bi bi-exclamation-triangle-fill" />
        </div>
        <div className="menu-title">Errors</div>
      </a>
      <ul>
        <li> <a href="pages-errors-404-error.html" target="_blank"><i className="bi bi-circle" />404 Error</a>
        </li>
        <li> <a href="pages-errors-500-error.html" target="_blank"><i className="bi bi-circle" />500 Error</a>
        </li>
        <li> <a href="pages-errors-coming-soon.html" target="_blank"><i className="bi bi-circle" />Coming Soon</a>
        </li>
        <li> <a href="pages-blank-page.html" target="_blank"><i className="bi bi-circle" />Blank Page</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="pages-faq.html">
        <div className="parent-icon"><i className="bi bi-question-lg" />
        </div>
        <div className="menu-title">FAQ</div>
      </a>
    </li>
    <li>
      <a href="pages-pricing-tables.html">
        <div className="parent-icon"><i className="bi bi-tags-fill" />
        </div>
        <div className="menu-title">Pricing Tables</div>
      </a>
    </li>
    <li className="menu-label">Charts &amp; Maps</li>
    <li>
      <a className="has-arrow" href="javascript:;">
        <div className="parent-icon"><i className="bi bi-bar-chart-line-fill" />
        </div>
        <div className="menu-title">Charts</div>
      </a>
      <ul>
        <li> <a href="charts-apex-chart.html"><i className="bi bi-circle" />Apex</a>
        </li>
        <li> <a href="charts-chartjs.html"><i className="bi bi-circle" />Chartjs</a>
        </li>
        <li> <a href="charts-highcharts.html"><i className="bi bi-circle" />Highcharts</a>
        </li>
      </ul>
    </li>
    <li>
      <a className="has-arrow" href="javascript:;">
        <div className="parent-icon"><i className="bi bi-pin-map-fill" />
        </div>
        <div className="menu-title">Maps</div>
      </a>
      <ul>
        <li> <a href="map-google-maps.html"><i className="bi bi-circle" />Google Maps</a>
        </li>
        <li> <a href="map-vector-maps.html"><i className="bi bi-circle" />Vector Maps</a>
        </li>
      </ul>
    </li>
    <li className="menu-label">Others</li>
    <li>
      <a className="has-arrow" href="javascript:;">
        <div className="parent-icon"><i className="bi bi-music-note-list" />
        </div>
        <div className="menu-title">Menu Levels</div>
      </a>
      <ul>
        <li> <a className="has-arrow" href="javascript:;"><i className="bi bi-circle" />Level One</a>
          <ul>
            <li> <a className="has-arrow" href="javascript:;"><i className="bi bi-circle" />Level Two</a>
              <ul>
                <li> <a href="javascript:;"><i className="bi bi-circle" />Level Three</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="javascript:;">
        <div className="parent-icon"><i className="bi bi-file-code-fill" />
        </div>
        <div className="menu-title">Documentation</div>
      </a>
    </li>
    <li>
      <a href="javascript:;">
        <div className="parent-icon"><i className="bi bi-telephone-fill" />
        </div>
        <div className="menu-title">Support</div>
      </a>
    </li>
  </ul>
  {/*end navigation*/}
</aside>

    
    </>
  )
}

export default LeftSidebar