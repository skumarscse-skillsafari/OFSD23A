const ProductCard = ({ otherProps }) => {
  return (
    <div>
      <h2>Product Card Component</h2>
      <p>{otherProps.image}</p>
      <hr />
    </div>
  );
};

export default ProductCard;
