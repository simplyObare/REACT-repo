/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { AppContext } from '../App'

const Home = () => {
  const { username } = useContext(AppContext)

  return (
    <div>
      <h1>This the home page</h1>
      <p>username: {username}</p>
    </div>
  )
}

export default Home
