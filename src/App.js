import "./App.css";
import React, { useRef, useState } from "react";

function App() {
  const numberARef = useRef(0);
  const numberBRef = useRef(0);
  const [result, setResult] = useState(0);

  const resultHandler = (sign) => {
    const _numberA = parseInt(numberARef.current.value);
    const _numberB = parseInt(numberBRef.current.value);
    const _result = eval(_numberA + sign + _numberB);
    setResult(_result);
    console.log(result);
  };
  const clearHandler = () => {
    numberARef.current.value = "";
    numberBRef.current.value = "";
    setResult("");
  };

  return (
    <div className="app-container">
      <section className="calc-container">
        <header className="header-container">
          <h3>My First Application - Calc</h3>
        </header>
        <main className="main-container">
          <div className="input-group">
            <p>Number A:</p>
            <input
              type="number"
              className="inout-number"
              placeholder="please enter a number"
              ref={numberARef}
            />
          </div>
          <div className="input-group">
            <p>Number B:</p>
            <input
              type="number"
              className="inout-number"
              placeholder="please enter a number"
              ref={numberBRef}
            />
          </div>
          <div className="result-container">
            <p>Result: {result}</p>
          </div>
          <div className="button-group">
            <button
              className="btn btn-primary"
              onClick={() => resultHandler("+")}
            >
              +
            </button>
            <button
              className="btn btn-primary"
              onClick={() => resultHandler("-")}
            >
              -
            </button>
            <button
              className="btn btn-primary"
              onClick={() => resultHandler("*")}
            >
              *
            </button>
            <button
              className="btn btn-primary"
              onClick={() => resultHandler("/")}
            >
              /
            </button>
            <button className="btn btn-secondary" onClick={clearHandler}>
              Clear
            </button>
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
