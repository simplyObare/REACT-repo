// NOTE: This is how you POST a Request from an API

import { useState } from 'react'

export default function PostForm() {
  const [userId, setUSerId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        width: '400px',
        padding: '30px 5px',
        margin: '0 auto',
        marginTop: '20px',
        backgroundColor: 'lightgray',
        borderRadius: '5px',
      }}
    >
      <div>
        <input
          style={{
            padding: '10px',
            margin: '10px',
            width: '300px',
            boxSizing: 'border-box',
            backgroundColor: 'white',
            border: 'none',
          }}
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUSerId(e.target.value)}
        />
      </div>
      <div>
        <input
          style={{
            padding: '10px',
            margin: '10px',
            width: '300px',
            boxSizing: 'border-box',
            backgroundColor: 'white',
            border: 'none',
          }}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          style={{
            padding: '10px',
            margin: '10px',
            width: '300px',
            boxSizing: 'border-box',
            backgroundColor: 'white',
            border: 'none',
          }}
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <button
        type="submit"
        style={{ padding: '10px', margin: '10px', width: '300px' }}
      >
        Submit
      </button>
    </form>
  )
}
