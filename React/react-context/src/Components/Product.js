import { CartState } from "../Context/Context";
import Cart from "./Cart";
const Product = ({ product }) => {
  console.log(CartState());
  //   console.log(product);
  const { title, description, price, image, category } = product;
  return (
    <div>
      <h2>Product Component</h2>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <p>
        <img src={image} alt={title} height={100} width={100} />
      </p>
      <Cart />
      <hr />
    </div>
  );
};

export default Product;
