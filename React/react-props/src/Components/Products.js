import Product from "./Product";
import products from "./data";
const Products = () => {
  return (
    <div>
      <h2>Products Components</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          productTitle={product.title}
          productDes={product.description}
          productPrice={product.price}
          productCategory={product.category}
          productImage={product.image}
          productRating={product.rating.rate}
          productCount={product.rating.count}
        />
      ))}
    </div>
  );
};

export default Products;
