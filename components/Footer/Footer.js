import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='footer-block'>
        <ul>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Student Discount</a>
          </li>
          <li>
            <a href='#'>Coupons</a>
          </li>
        </ul>
      </div>
      <div className='footer-block'>
        <ul>
          <li>
            <a href='#'>Contact Us</a>
          </li>
          <li>
            <a href='#'>Costumer Service</a>
          </li>
        </ul>
      </div>
      <div className='footer-block'>
        <ul>
          <li>
            <a href='#'>FAQ</a>
          </li>
          <li>
            <a href='#'>Order Status</a>
          </li>
        </ul>
      </div>
      <div className='footer-block'>
        <ul>
          <li>Call us: +123 456789</li>
          <li>Hours: Monday-Friday 10:00-20:00</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
