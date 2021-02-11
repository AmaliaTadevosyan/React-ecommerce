import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../images/logo.png";
import cart from "../../images/cart.png";
import search from "../../images/search.png";
import "./Navigation.css";

const Navigation = ({ cartItems }) => {
  return (
    <nav className='nav'>
      <NavLink to='/' activeStyle={{ color: "#780202" }}>
        <img src={logo} alt='logo' />
      </NavLink>

      <ul className='navbar'>
        <li className='nav-item'>
          <NavLink
            to='/productpage'
            className='nav-link'
            activeStyle={{ color: "#780202" }}
          >
            Furtniture
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/productpage'
            className='nav-link'
            activeStyle={{ color: "#780202" }}
          >
            Lighting
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/productpage'
            className='nav-link'
            activeStyle={{ color: "#780202" }}
          >
            Decor
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/productpage'
            className='nav-link'
            activeStyle={{ color: "#780202" }}
          >
            Tablewear
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/basket' className='nav-link'>
            <img src={cart} alt='cart' />
            <span style={{ color: "#780202" }}>
              {cartItems.length === 0 ? null : cartItems.length}
            </span>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/productpage'
            className='nav-link'
            activeStyle={{ color: "#780202" }}
          >
            <img src={search} alt='search' />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

export default connect(mapStateToProps, null)(Navigation);
