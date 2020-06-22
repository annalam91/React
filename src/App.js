import React from 'react';
import './styles/App.css';
import TodoItem from './components/TodoItem';
import todosData from './API/todosData';

function App() {
  return (
    <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </div>
  )
}

export default App
