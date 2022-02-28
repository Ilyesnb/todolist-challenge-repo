import React from "react";
import IconCheck from "../images/icon-check.svg";
import {useContext} from "react"
import {ThemeContext} from "../context/ThemeContext"
import {removeTodo} from "../Slices/TodoSlice"
import {useDispatch} from "react-redux"


function TodoItems({mytodo}) {
  const dispatch =useDispatch()
  const handelRemove = () =>{
    dispatch(removeTodo())
  }
  const {theme}=useContext(ThemeContext)
  return (
    <div id="unknown" className={theme? "todo-item light" : "todo-item dark"}>
      <div className="complited">
      <div id="unknown" className={theme? "cercle light-cercle" : "cercle dark-cercle"}>
        <img src={IconCheck} />
      </div>
      
      <div id="unknown" className={theme? "todo-text light-text" : "todo-text dark-text"}>
        {mytodo}
      </div>
      </div>
      <button className={theme? "btn-delete light-btn" : "btn-delete dark-btn"} onClick={handelRemove}>X</button>
      
      
    </div>
  );
}

export default TodoItems;
