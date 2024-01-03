import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../features/counter/counterSlice";

const Counter = () => {
  const { value } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{value}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <button onClick={() => dispatch(incrementByValue(5))}>
        Increment By 5
      </button>
    </div>
  );
};

export default Counter;
