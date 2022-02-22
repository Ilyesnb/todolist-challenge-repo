import Input from "./Components/Input"
import Header from "./Components/Header"
import TodoItems from "./Components/TodoItems"
import TodoInfo from "./Components/TodoInfo"
import { useSelector } from "react-redux"
import { selectTodoList } from "./Slices/TodoSlice"
import './App.css' 
function App() {
  const TodoList = useSelector(selectTodoList)

  return (
    <div className="App"> 
      <Input/>
      <Header/>
      <div className="margin">
      {TodoList.map((item,index)=>(
        <TodoItems key={index} todo={item.add} />
      ))}
      <TodoInfo/>
      </div>

    </div>
  )
}

export default App
