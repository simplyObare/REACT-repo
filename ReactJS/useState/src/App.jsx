import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{ marginRight: '10px' }}
      >
        Increase
      </button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>
        Set to Zero
      </button>
    </div>
  )
}

export default App
