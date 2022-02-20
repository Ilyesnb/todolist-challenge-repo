import React,{useState} from 'react'

function Input() {
    const [list, setList] = useState(""); 
    const handelChange = (event) => {
      setList(event.target.value);
  
    };
    const handelSubmit = (event)=>{
      event.preventDefault();
  
    }
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
          />
          <div className="check-mark">
            <div className="cercle"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Input