import { useContext } from 'react'
import { AppContext } from '../App'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

const Home = () => {
  const { username } = useContext(AppContext)
  const { data } = useQuery(['cat'], () => {
    return Axios.get('https://catfacts.ninja/fact').then((res) => res.data)
  })

  return (
    <div>
      <h1>This the home page</h1>
      <p>username: {username}</p>
      <hr />
      <p>{data?.fact}</p>
      <hr />
    </div>
  )
}

export default Home
