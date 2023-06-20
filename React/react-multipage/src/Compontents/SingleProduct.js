import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    </div>
  );
};

export default SingleProduct;
