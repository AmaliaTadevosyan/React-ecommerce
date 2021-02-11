import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";

const Menu = () => {
  return (
    <div className='menu'>
      <MenuItem buttonText='Living Room' />
      <MenuItem buttonText='Bedroom' />
      <MenuItem buttonText='Kitchen' />
      <MenuItem buttonText='Outdoor' />
      <MenuItem buttonText='Office' />
      <MenuItem buttonText='Restaurants' />
    </div>
  );
};

export default Menu;
