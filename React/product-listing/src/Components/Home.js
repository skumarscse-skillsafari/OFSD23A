import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import { CartState } from "../Context/Context";

const Home = () => {
  //   console.log(CartState());
  const {
    state: { products },
  } = CartState();
  return (
    <Row className="mt-3">
      <Col sm={4}>
        <Filter />
      </Col>
      <Col sm={8}>
        <Row className="g-3">
          {products.map((product) => (
            <SingleProduct product={product} key={product.id} />
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
