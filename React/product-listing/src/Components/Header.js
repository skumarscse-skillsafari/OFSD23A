import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartState } from "../Context/Context";

const Header = () => {
  //   console.log(CartState());
  const {
    state: { cart },
  } = CartState();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Products Listing</Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <NavDropdown
          title={
            <>
              <Button variant="primary">
                <AiOutlineShoppingCart />{" "}
                <Badge bg="secondary">{cart.length}</Badge>
                <span className="visually-hidden">unread messages</span>
              </Button>
            </>
          }
          id="navbarScrollingDropdown"
        >
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
