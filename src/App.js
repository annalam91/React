import React, { Component } from 'react';
import './styles/App.css';
import TodoItem from './components/TodoItem';
import todosData from "./api/todosData";

class App extends Component {
  constructor() {
    super() 
    this.state = {
      todos: todosData
    }
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
  }

export default App
