import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setActive,
  selectBooleanState,
  setInActive,
  showTextEmail,
  selectInputState,
} from "./booleanSlice";
import styled from "styled-components";
function BooleanComponent() {
  let value = useSelector(selectBooleanState);
  let inputValue = useSelector(selectInputState);
  let textValue = `${value}`;
  let dispatch = useDispatch();
  const [input, setInput] = useState();
  console.log(value);
  return (
    <Container className="boolean-component">
      <div className="inner-content">
        <button onClick={() => dispatch(setActive())}>toggle state true</button>
        <h1>{textValue}</h1>
        <button onClick={() => dispatch(setInActive())}>
          toggle state false
        </button>
        <div>
          <input
            type="text"
            placeholder="email"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => dispatch(showTextEmail(input))}>
            show text
          </button>
        </div>
        <div className="input-text">
          <h2>{inputValue ? <p>{inputValue}</p> : <p>not yet</p>}</h2>
        </div>
      </div>
    </Container>
  );
}

export default BooleanComponent;

const Container = styled.div`
  display: flex;
  h1 {
    font-weight: bold;
    color: blue;
  }
`;
