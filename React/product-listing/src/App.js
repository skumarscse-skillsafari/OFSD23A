import Container from "react-bootstrap/Container";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";

function App() {
  return (
    <Container fluid>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
