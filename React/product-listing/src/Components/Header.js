import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai";
import { CartState } from "../Context/Context";
import { Link } from "react-router-dom";

const Header = () => {
  //   console.log(CartState());
  const {
    state: { cart },
    dispatch,
    productsDispatch,
  } = CartState();
  return (
    <Navbar bg="success" className="px-5">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "white" }}>
          Products Listing
        </Navbar.Brand>
        <Form className="d-flex w-50">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) =>
              productsDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
          />
        </Form>
        <DropdownButton
          drop="start"
          variant="primary"
          title={
            <>
              <AiOutlineShoppingCart />
              <Badge>{cart.length}</Badge>
            </>
          }
        >
          <Dropdown.Item style={{ width: 500 }}>
            {cart.map((c) => (
              <Card className="my-2" key={c.id}>
                <Card.Body>
                  <Row className="d-flex justify-content-center align-items-center">
                    <Col>
                      <Image
                        src={c.image}
                        roundedCircle
                        height={75}
                        width={75}
                      />
                    </Col>
                    <Col>
                      <div>{c.name}</div>
                      <div>{c.price}</div>
                    </Col>
                    <Col className="text-center">
                      <AiFillDelete
                        className="text-danger"
                        style={{ fontSize: "30px" }}
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
            <Row>
              <Link to="/cart" className="btn btn-primary">
                Go to Cart
              </Link>
            </Row>
          </Dropdown.Item>
        </DropdownButton>
      </Container>
    </Navbar>
  );
};

export default Header;
