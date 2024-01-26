import React, { useState } from "react";
import Style from "./App.module.css";
import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";
import Container from "./components/Container";
import { useContext } from "react";
import { Todo } from "./store/CalcItems";
function App() {
  const calculatorItems = [
    "1",
    "2",
    "3",
    "<",
    "4",
    "5",
    "6",
    "C",
    "7",
    "8",
    "9",
    "/",
    "+",
    "-",
    "*",
    "%",
    "0",
    "00",
    ".",
    "=",
  ];

  const [displayVal, setdisplayVal] = useState("");
  function currentVal(val) {
    console.log(val);
    if (val == "C") {
      setdisplayVal("");
    } else if (val === "=") {
      let equation = eval(displayVal);
      setdisplayVal(equation);
    } else if (val == "<") {
      let newVal = displayVal.substring(0, displayVal.length - 1);
      setdisplayVal(newVal);
    } else {
      setdisplayVal((prevValue) => prevValue + val);
    }
  }
  return (
    <Todo.Provider value={{ calculatorItems, displayVal, currentVal }}>
      <div className={Style.Calculator}>
        <h1 style={{ marginBottom: ".51em", color: "#111", fontSize: "3.4em" }}>
          Calculator
        </h1>
        <Display />
        <BtnContainer />
        <Container>
          <h2>
            Created By -{" "}
            <a href="https://twitter.com/abraham_shivam" target="_blank">
              Shivam Abraham
            </a>
          </h2>
          <br />
          <p>
            <a href="https://github.com/Mr-Abraham/calculator" target="_blank">
              Click here to see the source code
            </a>
          </p>
        </Container>
      </div>
    </Todo.Provider>
  );
}

export default App;
