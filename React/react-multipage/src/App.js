import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Compontents/Nav";
import About from "./Compontents/About";
import Projects from "./Compontents/Projects";
import Services from "./Compontents/Services";
import Contact from "./Compontents/Contact";
import Home from "./Compontents/Home";
import Error from "./Compontents/Error";
import SingleProduct from "./Compontents/SingleProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productID" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
