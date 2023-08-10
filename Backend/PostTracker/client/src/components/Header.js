import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-secondary">
        <Container>
          <Navbar.Brand href="#home">
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
              <Nav.Link>
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  className="text-light"
                >
                  Post List
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to="/post/create"
                  style={{ textDecoration: "none" }}
                  className="text-light"
                >
                  Create Post
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to="/user/create"
                  style={{ textDecoration: "none" }}
                  className="text-light"
                >
                  Create User
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
