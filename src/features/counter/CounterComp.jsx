import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, selectCount } from "./counterSlice";

function CounterComp() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
    </div>
  );
}

export default CounterComp;
