import React from "react";
import {useContext} from "react"
import {ThemeContext} from "../context/ThemeContext"

function TodoInfo() {
  const {theme} = useContext(ThemeContext)
  return (
    <div>
      <div className={theme? "todo-items-info lightinfo":"todo-items-info darkinfo"}>
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
