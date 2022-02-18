import LightDesktop from "../images/bg-desktop-light.jpg";
import MoonIcon from "../images/icon-moon.svg";
import React, { useState } from "react";
function Todolist({ myTodo ,sendList}) {
  const [list, setList] = useState(""); 
  const handelChange = (event) => {
    setList(event.target.value);

  };
  const handelSubmit = (event)=>{
    event.preventDefault();
    sendList(list)

  }
  return (
    <div className="header">
      <img className="LightDesktop" src={LightDesktop} alt="" />
      <img className="moon" src={MoonIcon} alt="" />
      <h1 className="todo">TODO</h1>
      <div className="new-todo">
        <form onSubmit={handelSubmit}>
          <input
            className="todoText"
            type="text"
            placeholder="Create a new todo..."
            onChange={handelChange}
            value={list}
          />
          <div className="check-mark">
            <div className="cercle"/>
          </div>
        </form>
      </div>
      <h2>{myTodo}</h2>
    </div>
  );
}

export default Todolist;
