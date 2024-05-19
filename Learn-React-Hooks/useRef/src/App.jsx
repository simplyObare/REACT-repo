import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const inputElement = useRef()

  const btnClick = () => {
    inputElement.current.style.background = 'green'
  }

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={btnClick}>click here</button>
    </>
  )
}

export default App
