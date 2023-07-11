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
import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai";
import { CartState } from "../Context/Context";

const Header = () => {
  //   console.log(CartState());
  const {
    state: { cart },
  } = CartState();
  return (
    <Navbar bg="success" className="px-5">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "white" }}>
          Products Listing
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
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
              <Card>
                <Card.Body>
                  <Row>
                    <Col>
                      <img src={c.image} alt={c.name} height={75} width={75} />
                    </Col>
                    <Col>
                      <div>{c.name}</div>
                      <div>{c.price}</div>
                    </Col>
                    <Col>
                      <AiFillDelete />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
            <Row>
              <button className="btn btn-primary">Clear Cart</button>
            </Row>
          </Dropdown.Item>
        </DropdownButton>
      </Container>
    </Navbar>
  );
};

export default Header;
