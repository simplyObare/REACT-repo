import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1)
    }, 2000)
  }, [count])

  return (
    <>
      <p>I&#39;ve rendered {count} times</p>
    </>
  )
}

export default App
