import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],

};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    SaveTodo: (state, action) => {
      state.todoList.push(action.payload);
      // console.log(action);
    },
    removeTodo: (state, action) => {
      state.todoList.filter(todo => todo.id !== action.payload);
      console.log(action);      
    },
  },
});

export const { SaveTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
