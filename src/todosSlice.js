import { createSlice } from '@reduxjs/toolkit'
import { ApiLevel } from '@testing-library/user-event/dist/types/utils';

export const todosSlice = createSlice({
    name: 'todo',
    initialState: ['Finish the application'],
    reducers: {
        addTodo: (state, action) => {
            const item = action.payload;
            if(item != '') {
                state.push(item);
            }
        }
    }
});


// the outside "thunk creator" function
const fetchUserById = userId => {
    // the inside "thunk function"
    return async (dispatch, getState) => {
      try {
        // make an async call in the thunk
        const user = await userAPI.fetchById(userId)
        // dispatch an action when we get the response back
        dispatch(userLoaded(user))
      } catch (err) {
        // If something went wrong, handle it here
      }
    }
  }

function showRandomFact () {
    return async function(dispatch, getState) {
        // Fetch a random Fact from an API
        const data = await getRandomFact();
        dispatch(showFact(data));
    }
} 

// We can export the returned action(s)
export const { addTodo } = todosSlice.actions;

// We can export the reducer
export default todosSlice.reducer;

// 'todos' is the slice of the state we created in 'store.js'
export const selectTodos = (state) => state.todos;