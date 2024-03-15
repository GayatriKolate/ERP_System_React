// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import ProductsManagement from './Components/ProductsManagement';
import OrdersManagement from './Components/OrdersManagement';
import Header from './Components/Header'; // Import the Header component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include the Header component */}
        <nav className="navbar">
          {/* Dashboard link with icon */}
          <NavLink to="/" activeClassName="active" exact>
            <div className='icon-section'>
              <span className="material-symbols-outlined">team_dashboard</span>
              <p className='icon-text'>Dashboard</p>
            </div>
          </NavLink>
          {/* Products link with icon */}
          <NavLink to="/products" activeClassName="active">
            <div className='icon-section'>
              <span className="material-symbols-outlined">inventory_2</span>
              <p className='icon-text'>Products</p>
            </div>
          </NavLink>
          {/* Orders link with icon */}
          <NavLink to="/orders" activeClassName="active">
            <div className='icon-section'>
              <span className="material-symbols-outlined">order_approve</span>
              <p className='icon-text'>Orders</p>
            </div>
          </NavLink>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductsManagement />} />
            <Route path="/orders" element={<OrdersManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
