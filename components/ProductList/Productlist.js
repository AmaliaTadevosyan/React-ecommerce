import React, { useEffect } from "react";
import { withShopStoreService } from "../../hoc";
import { connect } from "react-redux";
import { ItemsLoaded, ItemAddToCart } from "../../actions";
import ProductItem from "../ProductItem/ProductItem";
import "./Productlist.css";

const Productlist = (props) => {
  const { shopStoreService, onAddToCArt, getItems, items } = props;

  useEffect(() => {
    getItems(shopStoreService.data);
  }, [getItems, shopStoreService]);

  const handleAddToCart = (itemId) => {
    onAddToCArt(itemId);
  };

  return (
    <section className='productlist-container'>
      <h2>Best Sellers</h2>
      <div className='productlist'>
        <ProductItem products={items} handleAddToCart={handleAddToCart} />
      </div>
      <button className='btn productlist-btn'>see more</button>
    </section>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  getItems: (data) => dispatch(ItemsLoaded(data)),
  onAddToCArt: (id) => dispatch(ItemAddToCart(id)),
});

const ShopListConnectService = withShopStoreService(Productlist);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopListConnectService);
