import { useCounter } from '../hooks/useCounter'

const Counter = () => {
  const { count, increaseCount, decreaseCount } = useCounter()

  return (
    <>
      <h1>Custom counter hooks</h1>
      <h4>{count}</h4>
      <button onClick={() => increaseCount()} style={{ marginRight: '10px' }}>
        Increase
      </button>
      <button onClick={() => decreaseCount()}>Decrease</button>
    </>
  )
}

export default Counter
