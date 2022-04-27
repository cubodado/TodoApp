import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, content: 'Meditation', clear: 'false' },
    { id: 2, content: 'Taking a nap', clear: 'true' },
    { id: 3, content: 'Reading network books', clear: 'false' },
    { id: 4, content: 'Running', clear: 'false' },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.random(),
        title: action.payload.title,
        clear: 'false',
      };
      state.push(newTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
