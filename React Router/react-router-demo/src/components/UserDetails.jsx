import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const {userId} = useParams()
  
  return <div>Details About User {userId}</div>
}

export default UserDetails
