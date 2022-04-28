import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTodoAsync = createAsyncThunk('todos/getTodoAsync', async () => {
  const response = await fetch('http://localhost:8080/api/v1');
  if (response.ok) {
    const todos = await response.json();
    return { todos };
  }
});

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
  extraReducers: {
    [getTodoAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
  },
});

export const { addTodo, toggleClear, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
