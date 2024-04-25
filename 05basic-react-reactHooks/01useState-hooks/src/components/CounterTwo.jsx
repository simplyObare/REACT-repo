/* NOTE: any time you need to update a state value, pass in the previous state */
/* NOTE: using the prevCount is the safer way of writing code*/

import { useState } from 'react'

export default function CounterTwo() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1)
    }
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>{' '}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>{' '}
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>{' '}
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}
