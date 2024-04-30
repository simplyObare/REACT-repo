import { useContext } from 'react'
import { LoginContext } from '../App'

function SinglePost() {
  const login = useContext(LoginContext)
  console.log(login)

  return (
    <div>
      <h3>Single Post</h3>
    </div>
  )
}

export default SinglePost
