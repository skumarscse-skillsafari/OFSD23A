import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiFillDelete } from "react-icons/ai";
import { useState, useEffect } from "react";
import { CartState } from "../Context/Context";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <Row>
      <Col sm={8}>
        {cart.map((c) => (
          <Card className="my-2" key={c.id}>
            <Card.Body>
              <Row className="d-flex justify-content-center align-items-center">
                <Col>
                  <Image src={c.image} roundedCircle height={75} width={75} />
                </Col>
                <Col>
                  <div>{c.name}</div>
                  <div>{`Rs. ${c.price}`}</div>
                </Col>
                <Col>{c.ratings}</Col>
                <Col>
                  <Form.Select
                    value={c.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: c.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {console.log([...Array(c.inStock).keys()])}
                    {[...Array(c.inStock).keys()].map((val) => (
                      <option key={val + 1}>{val + 1}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col className="text-center">
                  <AiFillDelete
                    className="text-danger"
                    style={{ fontSize: "30px", cursor: "pointer" }}
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: c.id,
                      })
                    }
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Col>
      <Col>
        <h3 sm={4}>Cart Product Pricing</h3>
        <div
          className="d-flex flex-column justify-content-around"
          style={{ minHeight: "150px" }}
        >
          <div>Subtotal: {cart.length} items</div>
          <div>Total: Rs. {total}</div>
          <Button type="button">Proceed to Checkout</Button>
        </div>
      </Col>
    </Row>
  );
};

export default Cart;
