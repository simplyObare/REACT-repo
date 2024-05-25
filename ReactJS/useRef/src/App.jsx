import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [randomInput, setRandomInput] = useState('')
  const [seconds, setSeconds] = useState(0)

  const renders = useRef(0)
  const timerId = useRef()

  const handleChange = (e) => {
    setRandomInput(e.target.value)
    renders.current++
    e.preventDefault()
  }

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current
      setSeconds((prev) => prev + 1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(timerId.current)
    timerId.current = 0
  }

  const resetTimer = () => {
    stopTimer()
    if (seconds) {
      renders.current++
      setSeconds(0)
    }
  }

  return (
    <main className="App">
      <input
        type="text"
        onChange={handleChange}
        value={randomInput}
        placeholder="Random Input"
        style={{ width: 300, height: 20 }}
      />
      <p>Renders: {renders.current}</p>
      <br />
      <section>
        <button onClick={startTimer} style={{ marginRight: 10 }}>
          Start
        </button>
        <button onClick={stopTimer} style={{ marginRight: 10 }}>
          Stop
        </button>
        <button onClick={resetTimer}>Reset</button>
      </section>
      <br />
      <p>Seconds: {seconds}</p>
      <br />
      <p>{randomInput}</p>
    </main>
  )
}

export default App
