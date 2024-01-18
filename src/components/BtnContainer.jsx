import React from "react";
import style from "./BtnContainer.module.css";
function BtnContainer({ calcItems, curVal }) {
  return (
    <div className={style.btnContainer}>
      {calcItems.map((item) => (
        <button
          key={item}
          onClick={() => {
            curVal(item);
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
