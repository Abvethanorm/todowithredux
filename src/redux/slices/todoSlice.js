import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    clearTodo: (state) => {
      state.tasks = [];
    },
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.tasks.push(newTodo);
    },
  },
});

export const { clearTodo, addTodo } = todoSlice.actions;

export default todoSlice.reducer;
