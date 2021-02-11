import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import {
  ItemAddToCart,
  removeItemFromCart,
  decrementItemInCart,
} from "../actions";
import { connect } from "react-redux";

const Basket = ({ cartItems, addToCart, removeItem, decrementItem }) => {
  const incrementProduct = (id) => {
    addToCart(id);
  };

  const decrementProduct = (id) => {
    decrementItem(id);
  };

  const deleteProduct = (id) => {
    removeItem(id);
  };

  const renderRow = (item, index) => {
    const { id, title, count, total } = item;
    return (
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button
            onClick={() => deleteProduct(id)}
            className='btn btn-outline-danger btn-sm float-right'
          >
            <i className='fa fa-trash-o' />
          </button>
          <button
            onClick={() => incrementProduct(id)}
            className='btn btn-outline-success btn-sm float-right'
          >
            <i className='fa fa-plus-circle' />
          </button>
          <button
            onClick={() => decrementProduct(id)}
            className='btn btn-outline-warning btn-sm float-right'
          >
            <i className='fa fa-minus-circle' />
          </button>
        </td>
      </tr>
    );
  };
  return (
    <section>
      <Navigation />
      <div className='shopping-cart-table'>
        <h2>Your Order</h2>

        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Count</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item, index) => renderRow(item, index))}
          </tbody>
        </table>
      </div>

      <Link to='/checkout' style={{ float: "right", color: "#780202" }}>
        Checkout
      </Link>
    </section>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(ItemAddToCart(id)),
  removeItem: (id) => dispatch(removeItemFromCart(id)),
  decrementItem: (id) => dispatch(decrementItemInCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
