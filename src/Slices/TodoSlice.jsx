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
    },
    removeTodo: (state, action) => {
      state.todoList.splice(state.todoList.findIndex((arrow) => arrow.id === action.payload), 1);
      console.log(action);
    },
  },
});

export const { SaveTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
