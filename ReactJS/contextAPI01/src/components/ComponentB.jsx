import { useCounter } from '../context/CounterContext'

const ComponentB = () => {
  const { increaseCount } = useCounter()
  return (
    <div>
      <button onClick={increaseCount} style={{ background: 'red' }}>
        INCREASE COUNT
      </button>
    </div>
  )
}

export default ComponentB
