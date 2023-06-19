import { useReducer } from "react";
const UseReducer = () => {
  // useReducer()
  // const [state, dispatchFunction] = useReducer(reducerFunction, initialValue)
  // reducerFunction(state, actionObj)
  // actionObj = {
  // type: "ACTION_DESCRIPTION",
  // payload: data (optional)
  // }

  const reducerFun = (state, action) => {
    // console.log(state);
    // console.log(action);
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count - 1 };

      case "RESET":
        return { count: 0 };

      default:
        return console.log(state);
    }
  };

  let initialValue = {
    count: 1,
  };
  const [state, dispatch] = useReducer(reducerFun, initialValue);
  //   console.log(state);

  return (
    <div className="reducer">
      <h2>{state.count}</h2>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
          })
        }
      >
        Increment
      </button>{" "}
      {"   "}
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
          })
        }
      >
        Decrement
      </button>{" "}
      {"   "}
      <button
        onClick={() =>
          dispatch({
            type: "RESET",
          })
        }
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducer;
