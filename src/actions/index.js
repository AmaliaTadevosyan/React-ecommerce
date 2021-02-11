import { productActions } from "./actionType";

export const ItemsLoaded = (payload) => ({
  type: productActions.ITEMS_LOADED,
  payload,
});

export const ItemAddToCart = (payload) => ({
  type: productActions.ITEM_ADDED_TO_CART,
  payload,
});

export const removeItemFromCart = (payload) => ({
  type: productActions.REMOVE_ITEM_FROM_CART,
  payload,
});

export const decrementItemInCart = (payload) => ({
  type: productActions.DECREMENT_ITEM_IN_CART,
  payload,
});
