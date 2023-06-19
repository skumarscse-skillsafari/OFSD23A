import { useState } from "react";
const UseState = () => {
  // useState(initialValue) => array of stateVariable and stateFunction
  // const [state, setState] = useState(1)
  // const [num, setNum] = useState(1)
  let initialValue = 0;
  const [num, setNum] = useState(initialValue);
  //   console.log(useState);
  //   console.log(num);
  //   console.log(setNum);

  const increment = () => {
    setNum((num) => num + 1);
  };

  const decrement = () => {
    setNum((num) => num - 1);
  };

  const reset = () => {
    setNum((num) => (num = 0));
  };

  return (
    <div className="state">
      <h1>{num}</h1>
      <button onClick={increment}>Increment</button> {"  "}
      <button onClick={decrement}>Decrement</button> {"   "}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UseState;
