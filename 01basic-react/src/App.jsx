import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React App</h1>
      <h2>Counter value: {count} </h2>
      <button onClick={() => setCount(count + 1)}>Add value</button>{' '}
      <button onClick={() => setCount(count - 1)}>Remove value</button>{' '}
      <button onClick={() => setCount(0)}>Reset value</button>
    </>
  )
}

export default App
