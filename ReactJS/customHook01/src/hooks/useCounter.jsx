import { useState } from 'react'

export default function useCounter(initialState = 0) {
  const [count, setCount] = useState(initialState)

  const increaseCount = (val = 1) => {
    setCount(count + val)
  }
  const decreaseCount = (val = 1) => {
    setCount(count - val)
  }
  return { count, increaseCount, decreaseCount }
}
