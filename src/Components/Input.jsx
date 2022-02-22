import { useState } from "react";
import { useDispatch } from "react-redux";
import { SaveTodo } from "../Slices/TodoSlice";

function Input() {
  const [list, setList] = useState("");
  const dispatch = useDispatch();
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
      <div className="new-todo">
        <form onSubmit={handelSubmit}>
          <input
            className="todoText"
            type="text"
            placeholder="Create a new todo..."
            onChange={handelChange}
            value={list}
            required
          />
          <div className="check-mark">
            <div className="cercle" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
