import { useState, createContext, useContext } from 'react'

export const CounterContext = createContext()
export const useCounter = () => useContext(CounterContext)

export default function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }
  const decreaseCount = () => {
    setCount(count - 1)
  }

  return (
    <CounterContext.Provider value={{ count, increaseCount, decreaseCount }}>
      {children}
    </CounterContext.Provider>
  )
}
