import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-secondary">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="text-light"
            >
              PostTracker App
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="text-light"
              >
                Post List
              </Link>

              <Link
                to="/post/create"
                style={{ textDecoration: "none" }}
                className="text-light"
              >
                Create Post
              </Link>

              <Link
                to="/user/create"
                style={{ textDecoration: "none" }}
                className="text-light"
              >
                Create User
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
