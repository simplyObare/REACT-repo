import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['/users/1'],
    queryFn: () => {
      axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then((res) => res.data)
    },
  })

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>Error</p>

  return (
    <>
      <h1>React Query</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default App
