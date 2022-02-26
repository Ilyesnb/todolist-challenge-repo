import { useState } from "react";
import { useDispatch } from "react-redux";
import { SaveTodo } from "../Slices/TodoSlice";
import CheckMark from "../images/icon-check.svg"
import {useContext} from "react"
import {ThemeContext} from "../context/ThemeContext"

function Input() {
  const [list, setList] = useState("");
  const dispatch = useDispatch();
  const {theme} = useContext(ThemeContext)
  const handelChange = (event) => {
    setList(event.target.value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    // console.log(`Adding ${list}`);
    dispatch(
      SaveTodo({
        add: list,
        done: false,
        id: Date.now(),
      })
    );
    setList("");
  };

  return (
    <div>
      <div className="new-todo ">
        <form onSubmit={handelSubmit}>
          <input
            className={theme? "todoText light-input" : "todoText dark-input"}
            type="text"
            placeholder="Create a new todo..."
            onChange={handelChange}
            value={list}
            required
          />
          <div className={theme? "check-mark light-check" : "check-mark dark-check"}>
            <div className={theme? "cercle light-cercle" : "cercle dark-cercle"} >
            <img src={CheckMark} alt=""/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
