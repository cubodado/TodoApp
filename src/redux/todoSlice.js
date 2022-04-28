import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, content: 'Meditation', clear: false },
    { id: 2, content: 'Taking a nap', clear: true },
    { id: 3, content: 'Reading network books', clear: false },
    { id: 4, content: 'Running', clear: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.random(),
        content: action.payload.content,
        clear: false,
      };
      state.push(newTodo);
    },
    toggleClear: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].clear = action.payload.clear;
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addTodo, toggleClear, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
