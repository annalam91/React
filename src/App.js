import React from 'react';
import './styles/App.css';
import TodoItem from './components/TodoItem';
import todosData from './API/todosData';

function App() {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
  
  return (
      <div>
          {todoItems}
      </div>
  )
}

export default App
