import { useState } from 'react'

export default function CounterThree() {
  const [name, setName] = useState({ firstName: '', lastName: '' })

  return (
    <form style={{ paddingTop: '15px' }}>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        style={{ padding: '10x 15px', margin: '5px' }}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        style={{ padding: '10x 15px', margin: '5px' }}
      />
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
    </form>
  )
}
