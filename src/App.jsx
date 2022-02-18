import { useState } from "react"
import Todolist from "./components/Todolist"
import TodoItems from "./components/TodoItems"
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
      </div>
    </div>
  )
}

export default App
