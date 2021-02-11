import React from "react";
import cartWhite from "../../images/cart-white.png";
import "./ProductItem.css";

const ProductItem = ({ products, handleAddToCart }) => {
  console.log(products);
  return (
    <div className='productlist'>
      {products.map((product) => {
        return (
          <div className='productItem-container' key={product.id}>
            <img
              src={product.coverImage}
              alt='product'
              className='product-img'
            />
            <div className='product-desc'>
              <p>{product.title}</p>
              <p className='price'>{product.price}$</p>
              <button
                className='add-btn'
                onClick={() => handleAddToCart(product.id)}
              >
                <img src={cartWhite} alt='cart' />
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductItem;
