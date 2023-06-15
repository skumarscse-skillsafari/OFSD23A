const ProductDetails = (props) => {
  let {
    productTitle,
    productPrice,
    productImage,
    productRating,
    productCount,
  } = props;
  return (
    <div className="productDetails">
      <h2>Product Details</h2>
      <p>Product Price: {productPrice}</p>
      <p>
        <img src={productImage} alt={productTitle} height={100} width={100} />
      </p>
      <p>Product Rating: {productRating}</p>
      <p>Product Count: {productCount}</p>
      <hr />
    </div>
  );
};

export default ProductDetails;
