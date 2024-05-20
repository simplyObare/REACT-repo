import { useReducer } from 'react'
import './App.css'

function App() {
  const [dispatch, count] = useReducer((count) => count + 1, 0)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={dispatch} style={{ marginRight: '10px' }}>
        Increase
      </button>
      <button>Decrease</button>
    </>
  )
}

export default App
