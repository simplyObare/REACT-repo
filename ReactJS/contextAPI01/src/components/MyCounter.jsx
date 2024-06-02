import { useCounter } from '../context/CounterContext'

const MyCounter = () => {
  const { count, increaseCount, decreaseCount } = useCounter()

  return (
    <div>
      <h3>Counter Component</h3>
      <p>Count is: {count}</p>
      <button onClick={increaseCount} style={{ marginRight: '10px' }}>
        Increase
      </button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default MyCounter
