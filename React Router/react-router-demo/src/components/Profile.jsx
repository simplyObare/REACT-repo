import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Auth'

const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logOut()
    navigate('/')
  }

  return (
    <div>
      Welcome: {auth.user}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Profile
