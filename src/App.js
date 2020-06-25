import React from 'react'
import Header from './components/Header.jsx';
import MemeGenerator from './components/MemeGenerator.jsx';
import './styles/App.css';

class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return(
      <div>
        <Header />
        <MemeGenerator/>
      </div>
    )
  }
}

export default App