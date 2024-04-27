import { useState, useEffect } from 'react'

export default function CounterOne() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('useEffect - Updating document title')
    document.title = `You clicked ${count} times`
  }, [count])

  //   NOTE: the action passed in the useEffect array, ensures the action is executed only if what is stated in the array changes

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}
