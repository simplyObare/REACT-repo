import { useState } from 'react'
import Child from './Child'

const Parents = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="parent">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>

      <Child header={'I am a child'} />
    </div>
  )
}

export default Parents
