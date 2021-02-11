import React from "react";
import masterCard from "../../images/master-card.png";
import "./Checkout-container.css";

const CheckoutContainer = () => {
  return (
    <div className='checkout-container'>
      <div className='checkout-card'>
        <div className='card'>
          <img src={masterCard} alt='master-card' />
          <form action=''>
            <div className='input-control'>
              <label htmlFor='number'>Card Number</label>
              <input type='text' />
            </div>
            <div className='input-control'>
              <label htmlFor='name'>Name</label>
              <input type='text' />
            </div>
            <div>
              <div className='input-control'>
                <label htmlFor='date'>Exp.date</label>
                <input type='text' />
              </div>
              <div className='input-control'>
                <label htmlFor='cvc'>CVC</label>
                <input type='text' />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='checkout-item'></div>
    </div>
  );
};

export default CheckoutContainer;
