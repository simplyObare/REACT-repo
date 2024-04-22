import { useState } from 'react'

const UseState = () => {
  const [name, setName] = useState('Obare')
  const [count, setCount] = useState(0)

  function handleClick() {
    setName('Owiny')
  }

  return (
    <div>
      <h2 style={{ textDecoration: 'underline' }}>React useState </h2>
      <h3>Hello, {name}</h3>
      <button onClick={handleClick}>Click me</button>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>{' '}
        <button onClick={() => setCount(count - 1)}>-</button>{' '}
        <button onClick={() => setCount(count - count)}>Rest</button>
      </div>
    </div>
  )
}

export default UseState
