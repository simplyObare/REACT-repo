import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'

const Login = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button
        onClick={() =>
          dispatch(login({ name: 'sachin', age: 23, email: 'sachin@123' }))
        }
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout())
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Login
