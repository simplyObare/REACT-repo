import { useState, useEffect } from 'react'

export default function Count() {
  const [count, setCount] = useState(0)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    if (count === 5) setShowText(true)
  }, [count])

  return (
    <div>
      <h1>useEffect Hook</h1>
      <p>Count is {count}</p>
      {showText ? <h3>Hello, World!</h3> : null}

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  )
}
