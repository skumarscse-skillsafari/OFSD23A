import { CartState } from "../Context/Context";
const Cart = () => {
  console.log(CartState());
  return (
    <div>
      <h2>Cart Component</h2>
    </div>
  );
};

export default Cart;
