export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      break;
    case "REMOVE_FROM_CART":
      break;
    case "CHANGE_CART_QTY":
      break;
    default:
      return state;
  }
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      break;
    case "FILTER_BY_STOCK":
      break;
    case "FILTER_BY_DELIVERY":
      break;
    case "FILTER_BY_RATING":
      break;
    case "FILTER_BY_SEARCH":
      break;
    case "CLEAR_FILTER":
      break;
    default:
      return state;
  }
};
