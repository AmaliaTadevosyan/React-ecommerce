import React, { useState } from "react";
import "./MenuItem.css";

const MenuItem = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ul className='menuItem'>
      <li onClick={toggleMenu} className='menu-btn'>
        {props.buttonText}
        <span className={menuOpen ? "arrow-down" : "arrow-right"}></span>
      </li>
      {menuOpen ? (
        <ul>
          <li>
            <a href='£'>Sofas</a>
          </li>
          <li>
            <a href='£'>Tables</a>
          </li>
          <li>
            <a href='£'>Chairs</a>
          </li>
          <li>
            <a href='£'>Closets</a>
          </li>
        </ul>
      ) : null}
    </ul>
  );
};

export default MenuItem;
