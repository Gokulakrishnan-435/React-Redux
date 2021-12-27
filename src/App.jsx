import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, Reset } from "./Redux/Action/action";

const App = () => {
  let value = useSelector(state => state);
  let disPatch = useDispatch();
  console.log(value);
  let { CounterReducer } = value;

  return (
    <div>
      <h1>{CounterReducer}</h1>
      <button onClick={() => disPatch(Increment())}>Increment</button>
      <button onClick={() => disPatch(Decrement())}>Decrement</button>
      <button onClick={() => disPatch(Reset())}>Rest</button>
    </div>
  );
};

export default App;
