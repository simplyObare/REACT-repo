/* eslint-disable react/prop-types */
import ChangeProfileComponent from '../components/ChangeProfileComponent'
import { useContext } from 'react'
import { AppContext } from '../App'

function Profile() {
  const { username, setUsername } = useContext(AppContext)
  return (
    <div>
      <h2>Profile page</h2>
      <p>{username}</p>
      <ChangeProfileComponent setUsername={setUsername} />
    </div>
  )
}

export default Profile
