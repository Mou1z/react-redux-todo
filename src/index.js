import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { store } from './app/store';
import { selectTodos } from './todosSlice';
 
function App(props) {
    let todos = useSelector(selectTodos);
 
    return (
        <div>
            <h1>Todo Application Using Redux</h1>
            <form>
                <ul>
                    {todos.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <input></input>
                <button>Add</button>
            </form>
        </div>
    );
}
 
createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);