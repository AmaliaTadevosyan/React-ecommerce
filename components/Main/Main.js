import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Main.css";

const Main = () => {
  return (
    <header>
      <div className='main-container'>
        <Navigation />
        <div className='main-heading'>
          <h1>Create your comfort zone</h1>
          <button>Shop now</button>
          <div className='long-arrow-down'>&#8595;</div>
        </div>
      </div>
    </header>
  );
};

export default Main;
