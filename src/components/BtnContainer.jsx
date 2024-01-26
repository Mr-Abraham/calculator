import React, { useContext } from "react";
import style from "./BtnContainer.module.css";
import { Todo } from "../store/CalcItems";
function BtnContainer() {
  const { currentVal, calculatorItems } = useContext(Todo);
  return (
    <div className={style.btnContainer}>
      {calculatorItems.map((item) => (
        <button
          key={item}
          onClick={() => {
            currentVal(item);
          }}
          className={style.calcBtn}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default BtnContainer;
