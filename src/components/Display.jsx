import React from "react";
import style from "./Display.module.css";
function Display({ value }) {
  return (
    <div className={style.display}>
      <input
        className={style.displayInput}
        type="text"
        readOnly
        value={value}
      />
    </div>
  );
}

export default Display;
