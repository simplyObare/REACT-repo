import { useState } from 'react'
import { useAuth } from '../context/Auth'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  const [user, setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    auth.logIn(user)
    navigate('/')
  }

  return (
    <div>
      <label htmlFor="">
        Username:{' '}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LogIn
