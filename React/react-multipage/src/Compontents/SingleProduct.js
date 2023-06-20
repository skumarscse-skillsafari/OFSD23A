import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const SingleProduct = () => {
  //   console.log(useParams());
  const { productID } = useParams();
  const [product, setProduct] = useState("");
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  console.log(product);

  return (
    <div>
      <h2>Single Product</h2>
      <div>
        <h2>Product Name: {product?.title}</h2>
        <p>Product Description: {product?.description}</p>
        <p>Product Price: {product?.price}</p>
        <p>
          <img
            src={product?.image}
            alt={product?.name}
            height={200}
            width={200}
          />
        </p>
        <p>Product Rating: {product?.rating?.rate}</p>
        <p>Product Count: {product?.rating?.count}</p>
        <Link to="/">Back to home page</Link>
      </div>
    </div>
  );
};

export default SingleProduct;
