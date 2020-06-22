import React from 'react';
import './styles/App.css';
import Product from './components/products';
import productData from './API/vschoolProducts';

function App() {
  const productComponents = productData.map(thing => <Product key={thing.id} product={thing}/>)
  
  return (
      <div>
          {productComponents}
      </div>
  )
}


export default App
