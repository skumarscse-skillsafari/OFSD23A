import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { CartState } from "../Context/Context";
const SingleProduct = ({ product }) => {
  //   console.log(product);
  const { state, dispatch, productsState, productsDispatch } = CartState();
  console.log(state.cart);
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{`Rs. ${product.price.split(".")[0]}`}</Card.Text>
          <Card.Text>{`Rating: ${product.ratings}`}</Card.Text>
          {state.cart.some((c) => c.id === product.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
            >
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleProduct;
