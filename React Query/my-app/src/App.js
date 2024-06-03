import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import './App.css'

function App() {
  const queryClient = useQueryClient()

  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
        res.json()
      ),
    // staleTime: 5000,
    // refetchInterval: 1000,
    // gcTime: 5000,
    retry: 3,
  })

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: (newPost) =>
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        header: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((res) => res.json()),

    onSuccess: (newPost) => {
      queryClient.setQueryData(['posts'], (oldQueryData) => {
        return [...oldQueryData, newPost]
      })
    },
  })

  if (error || isError) return <div>There was an error!</div>

  if (isLoading) return <div>DATA IS LOADING....</div>

  return (
    <div className="App">
      {isPending && <p>just a moment will be with you</p>}
      <button
        onClick={() =>
          mutate({
            userId: 500000,
            id: 40000,
            title: `Cake is a delicious treat about cakes!`,
            body: 'Cakes are sweet and delicious treats that come in various forms and flavors. They are often made with flour, sugar, eggs, and milk, and can be baked until golden brown. Some popular types of cakes include chocolate, vanilla, red velvet, and carrot.',
          })
        }
      >
        Add Post
      </button>

      {data?.map((todo) => (
        <div>
          <h4>ID: {todo.id}</h4>
          <h4>Title: {todo.title}</h4>
          <p>{todo.body}</p>
        </div>
      ))}
    </div>
  )
}

export default App
