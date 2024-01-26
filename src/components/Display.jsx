import React, { useContext } from "react";
import style from "./Display.module.css";
import { Todo } from "../store/CalcItems";
function Display() {
  const { displayVal } = useContext(Todo);
  return (
    <div className={style.display}>
      <input
        className={style.displayInput}
        type="text"
        readOnly
        value={displayVal}
      />
    </div>
  );
}

export default Display;
