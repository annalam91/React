import React from 'react';
import './styles/App.css';
import TodoItem from './components/TodoItem';
import todosData from "./api/todosData";

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
  const productComponents = productData.map(thing => <Product key={thing.id} product={thing}/>)
  
  return (
      <div>
          {productComponents}
      </div>
  )
  }
}

export default App