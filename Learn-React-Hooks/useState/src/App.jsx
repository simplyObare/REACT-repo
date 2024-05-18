import './App.css'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState('Red')
  return (
    <>
      <h1>My favorite color is {color}</h1>
      <button onClick={() => setColor('Blue')}>Blue</button>
    </>
  )
}

export default App
