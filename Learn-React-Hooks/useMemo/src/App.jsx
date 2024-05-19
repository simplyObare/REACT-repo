import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const [counter, setCounter] = useState(0)

  const cubeNum = (num) => {
    console.log('Calculation done')
    return Math.pow(num, 3)
  }
  const result = useMemo(() => cubeNum(number), [number])

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h1>Cube of the number: {result}</h1>

      <button onClick={() => setCounter(counter + 1)}>Count++</button>
      <h1>{counter}</h1>
    </>
  )
}

export default App
