import { useEffect, useState } from 'react'

const Text = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    console.log('useEffect mount')

    return () => {
      console.log('useEffect unmount')
    }
  })

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />

      <h1>{text}</h1>
    </div>
  )
}

export default Text
