import { useState } from 'react'

const Toggle = () => {
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

      <button onClick={toggle}>Toggle</button>
      <button onClick={onOpen}>Open</button>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Toggle
