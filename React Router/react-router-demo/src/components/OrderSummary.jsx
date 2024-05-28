import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
  const backBtn = useNavigate()

  return (
    <>
      <div>Order Completed</div>
      <button
        onClick={() => {
          backBtn(-1)
        }}
      >
        Go back
      </button>
    </>
  )
}

export default OrderSummary
