import React from "react";
import IconCheck from "../../images/icon-check.svg";

function TodoItems({todo}) {
  return (
    <div id="unknown" className="todo-item">
      <div id="unknown" className="cercle">
        <img src={IconCheck} />
      </div>
      <div id="unknown" className="todo-text">
        {todo}
      </div>
    </div>
  );
}

export default TodoItems;
