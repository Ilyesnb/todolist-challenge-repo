import list from "./components/Todo/list.js"
import Input from "./components/Todo/Input"
import Header from "./components/Todo/Header"
import TodoItems from "./components/Todo/TodoItems"
import './App.css'
function App() {

  return (
    <div className="App">
      <Input/>
      <Header/>
      <div className="margin">
      {list.map((item,index)=>(
        <TodoItems key={index} todo={item.name}/>
      ))}
      </div>
    </div>
  )
}

export default App
