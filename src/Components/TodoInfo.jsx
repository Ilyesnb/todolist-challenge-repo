import React from "react";

function TodoInfo() {
  return (
    <div>
      <div className="todo-items-info">
        <div className="items-left">5 items left</div>
        <div className="items-statuses">
          <span className="active">All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
        <div className="items-clear">
          <span>Clear Completed</span>
        </div>
      </div>
    </div>
  );
}

export default TodoInfo;
