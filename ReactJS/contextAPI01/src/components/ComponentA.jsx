import { useCounter } from '../context/CounterContext'

const ComponentA = () => {
  const { count } = useCounter()
  return (
    <div style={{ background: 'green' }}>
      <p>count is {count}</p>
    </div>
  )
}

export default ComponentA
