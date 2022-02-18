import { useState } from "react"
import Todolist from "./components/Todolist"
import TodoItems from "./components/TodoItems"
import TodoInfo from "./components/TodoInfo"
import './App.css'
function App() {
  const [msg, setMsg] = useState("")

  return (
    <div className="App">
      <Todolist sendList={(m)=>{setMsg(m)}} myTodo={msg}/>
      <div className="margin">
      <TodoItems/>
      <TodoItems/>
      <TodoItems/>
      <TodoInfo/>
      </div>
    </div>
  )
}

export default App
