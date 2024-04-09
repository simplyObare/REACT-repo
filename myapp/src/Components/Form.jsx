import { useState } from 'react'

export default function Form() {
  const [name, setName] = useState({ firstName: '', secondName: '' })
  function handleSubmit(e) {
    e.preventDefault()
    console.log(name)
  }

  return (
    <div>
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) => setName({ ...name, secondName: e.target.value })}
          type="text"
          value={name.secondName}
        />
        <button onClick={(e) => handleSubmit(e)}>ADD</button>
      </form>
    </div>
  )
}
