import { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2>Products Component</h2>
      <ProductDetails products={products} />
    </div>
  );
};

export default Products;
