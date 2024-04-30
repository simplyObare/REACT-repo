import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h1>
        {name} has clicked counter: {count} times
      </h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  )
}
