import './App.css'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
  }
  function onOpen() {
    setIsOpen(true)
  }
  function onClose() {
    setIsOpen(false)
  }

  return (
    <div>
      <h1>Custom toggle hook</h1>
      <h3>{isOpen.toString()}</h3>

      <button onClick={toggle} style={{ marginRight: '10px' }}>
        Toggle
      </button>
      <button onClick={onOpen}>Open</button>
      <button onClick={onClose} style={{ marginLeft: '10px' }}>
        Close
      </button>

      {isOpen && (
        <div
          style={{ height: '100px', width: '100px ', backgroundColor: 'red' }}
        >
          Navbar
        </div>
      )}
    </div>
  )
}

export default App
