import Card from "./Card";
import ProductCard from "./ProductCard";

const ProductDetails = ({ products }) => {
  return (
    <div>
      {products.map(({ id, title, price, description, ...otherProps }) => (
        <Card key={id}>
          <h2>{title}</h2>
          <p>{price}</p>
          <p>{description}</p>
          <ProductCard otherProps={otherProps} />
        </Card>
      ))}
    </div>
  );
};

export default ProductDetails;
