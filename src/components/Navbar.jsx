import React from 'react'
import { NavLink } from 'react-router-dom';
import '../index.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
    <div className="container-fluid">
      <span className="navbar-brand text-white" href="#">Shopping Cart</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/new-product">New Product</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/products">Product List</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar