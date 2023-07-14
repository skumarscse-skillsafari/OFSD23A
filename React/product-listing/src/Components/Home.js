import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import { CartState } from "../Context/Context";

const Home = () => {
  //   console.log(CartState());
  const {
    state: { products },
    productsState: { byStock, byQuickDelivery, byRating, searchQuery, sort },
  } = CartState();

  const transformProducts = () => {
    let newProducts = products;
    if (searchQuery) {
      newProducts = newProducts.filter((p) =>
        p.name.toLowerCase().includes(searchQuery)
      );
    }

    if (byQuickDelivery) {
      newProducts = newProducts.filter(
        (p) => p.quickDelivery === byQuickDelivery
      );
    }

    if (sort) {
      newProducts = newProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      newProducts = newProducts.filter((prod) => prod.inStock);
    }

    if (byRating) {
      newProducts = newProducts.filter((prod) => prod.ratings == byRating);
    }

    return newProducts;
  };
  return (
    <Row className="mt-3">
      <Col lg={3} md={4}>
        <Filter />
      </Col>
      <Col lg={9} md={8}>
        <Row className="g-3">
          {transformProducts().map((product) => (
            <SingleProduct product={product} key={product.id} />
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
