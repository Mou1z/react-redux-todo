import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './app/store';
import { selectTodos, addTodo } from './todosSlice';

function App(props) {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    const [ text, setText ] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the state here
        dispatch(addTodo(text));
        setText('');
    };

    return (
        <div>
            <h1>Todo Application Using Redux</h1>
            <form>
                <ul>
                    {todos.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <input value={text} onChange={handleChange} />
                <button onClick={handleSubmit}>Add</button>
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