import { createContext, useContext, useReducer } from "react";
import { cartReducer, productsReducer } from "./reducers";
import { faker } from "@faker-js/faker";

const Cart = createContext();
faker.seed(99);
const Context = ({ children }) => {
  const products = [...Array(20)].map((product) => {
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.urlLoremFlickr({ category: "abstract" }),
      inStock: faker.helpers.arrayElement([1, 3, 5, 7, 10]),
      quickDelivery: faker.datatype.boolean(),
      ratings: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5]),
    };
  });
  // console.log(products);
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [productsState, productsDispatch] = useReducer(productsReducer, {
    byStock: false,
    byQuickDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  return (
    <Cart.Provider value={{ state, dispatch, productsState, productsDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
