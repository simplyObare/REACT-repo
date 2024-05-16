import { useState, useCallback } from 'react'

import './App.css'
import GreetingBox from './GreetingBox'

function App() {
  const [name, setName] = useState('')
  const [counter, setCounter] = useState(0)

  const getGreeting = useCallback(() => {
    return `Hello ${name}!`
  }, [name])

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '10px', margin: '10px' }}
      />

      <GreetingBox getGreeting={getGreeting} />

      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+ by 1</button>
    </div>
  )
}

export default App
