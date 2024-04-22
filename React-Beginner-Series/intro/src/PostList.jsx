// NOTE: This is how you GET a Request from an API

import { useState, useEffect } from 'react'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseData) => setPosts(responseData))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li
              key={post.id}
              style={{
                listStyle: 'none',
                backgroundColor: 'lightgray',
                padding: '10px',
                margin: '10px',
                border: 'none',
                borderRadius: '5px',
                color: '#242424',
              }}
            >
              {post.title}
              <hr />
              {post.body}
              <hr />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PostList
