import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Nav from "./Components/Nav";
import Layout from "./Components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import Base from "./Components/Base";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <About /> */}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Base />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
