import Input from "./Components/Input"
import Header from "./Components/Header"
import TodoItems from "./Components/TodoItems"
import TodoInfo from "./Components/TodoInfo"
import { useSelector } from "react-redux"
import ThemeContextProvider from "./context/ThemeContext"
import './App.css' 
function App() {
  const TodoList = useSelector(state => state.todos.todoList)

  return (
    <div className="App"> 
    <ThemeContextProvider>
      <Input/>
      <Header/>
      <div className="margin">
      {TodoList.map((item,index)=>(
        <TodoItems key={index} mytodo={item.add} />
      ))}
      <TodoInfo/>
      </div>
      </ThemeContextProvider>

    </div>
  )
}

export default App
