import ProductDetails from "./ProductDetails";

const Product = (props) => {
  //   console.log(props);
  let {
    productTitle,
    productDes,
    productPrice,
    productCategory,
    productImage,
    productRating,
    productCount,
  } = props;
  console.log(productTitle);
  console.log(productDes);
  console.log(productPrice);
  console.log(productCategory);
  console.log(productImage);
  console.log(productRating);
  console.log(productCount);

  return (
    <div className="product">
      <h2>Product Component</h2>
      <h2>Product Title: {productTitle}</h2>
      <p>Product Description: {productDes}</p>
      <p>Product Category: {productCategory} </p>
      <ProductDetails
        productTitle={productTitle}
        productImage={productImage}
        productPrice={productPrice}
        productRating={productRating}
        productCount={productCount}
      />
    </div>
  );
};

export default Product;
