import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{ marginRight: '10px' }}
      >
        Increase
      </button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </>
  )
}

export default App
