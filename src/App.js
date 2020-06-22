import React from 'react';
import './styles/App.css';
import Joke from './components/Jokes';
import jokesData from './API/jokesData';

function App() {
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
  
  return (
      <div>
          {jokeComponents}            
      </div>
  )
}

export default App
