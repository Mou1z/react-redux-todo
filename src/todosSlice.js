import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'todo',
    initialState: ['Finish the application'],
    reducers: {
        addTodo: (state, action) => {
            const item = action.payload;
            if(item !== '') {
                state.push(item);
            }
        }
    }
});

// We can export the returned action(s)
export const { addTodo } = todosSlice.actions;

// We can export the reducer
export default todosSlice.reducer;

// 'todos' is the slice of the state we created in 'store.js'
export const selectTodos = (state) => state.todos;