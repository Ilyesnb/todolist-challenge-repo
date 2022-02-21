import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList:[],

}

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    SaveTodo:(state,action) => {
      state.todoList.push(action.payload)
    }
    
  }
});

export const { SaveTodo} = TodoSlice.actions
export const selectTodoList = state => state.todos.todoList
export default TodoSlice.reducer