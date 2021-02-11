const initialState = {
  items: [],
  cartItems: [],
  orderTotal: 0,
};

const updateCartItem = (product, item = {}, quantity) => {
  const { id = product.id, title = product.title, count = 0, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + product.price * quantity,
  };
};

const updateCartItems = (cartItems, item, index) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
  }

  if (index === -1) {
    return [...cartItems, item];
  } else {
    return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
  }
};

const updateOrder = (state, productId, quantity) => {
  const { cartItems, items } = state;
  const product = items.find(({ id }) => id === productId);
  const itemIndex = cartItems.findIndex(({ id }) => productId === id);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(product, item, quantity);
  return {
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ITEMS_LOADED":
      return {
        ...state,
        items: action.payload,
      };

    case "ITEM_ADDED_TO_CART":
      return {
        ...state,
        ...updateOrder(state, action.payload, 1),
      };

    case "REMOVE_ITEM_FROM_CART":
      const item = state.cartItems.find((item) => item.id === action.payload);
      return {
        ...state,
        ...updateOrder(state, action.payload, -item.count),
      };

    case "DECREMENT_ITEM_IN_CART":
      return {
        ...state,
        ...updateOrder(state, action.payload, -1),
      };

    default:
      return state;
  }
};

export default reducer;
