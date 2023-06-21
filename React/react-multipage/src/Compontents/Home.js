import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <h2>Home Component</h2>
      {products.map((product) => (
        <div key={product.id} className={`product-${product.id}`}>
          <h2>Product Name: {product.title}</h2>
          <p>
            <img
              src={product.image}
              alt={product.title}
              height={200}
              width={200}
            />
          </p>
          <p>Product Price: {product.price}</p>
          <Link to={`/products/${product.id}`}>More info...</Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
