import { useContext, createContext, useState } from "react";

const Cart = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState({
    id: 35,
    title: "Demo title",
    description: "Demo description",
    price: 123,
    category: "demo category",
  });
  const [cart, setCart] = useState([]);
  return (
    <Cart.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
