import React from "react";
import IconCheck from "../images/icon-check.svg";

function TodoItems() {
  return (
    <div id="unknown" className="todo-item">
      <div id="unknown" className="cercle">
        <img src={IconCheck} />
      </div>
      <div id="unknown" className="todo-text">
        Cut the lawn
      </div>
    </div>
  );
}

export default TodoItems;
