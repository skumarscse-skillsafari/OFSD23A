import logo from "./logo.svg";
import "./App.css";
import Products from "./Components/Products";
import UseState from "./Components/State/UseState";
import UseReducer from "./Components/State/UseReducer";

function App() {
  return (
    <div className="App">
      {/* <Products /> */}
      {/* <UseState /> */}
      <UseReducer />
    </div>
  );
}

export default App;
