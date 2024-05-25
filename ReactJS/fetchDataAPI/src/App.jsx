import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [joke, setJoke] = useState({})

  const generateJoke = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((data) => setJoke(data))
  }

  useEffect(() => {
    generateJoke()
  }, [])

  return (
    <>
      <h1>Random jokes: </h1>
      <div>
        <div>{joke.setup}</div>
        <div>{joke.punchline}</div>
        <br />
        <div>
          <button onClick={generateJoke}>Generate Joke</button>
        </div>
      </div>
    </>
  )
}

export default App
