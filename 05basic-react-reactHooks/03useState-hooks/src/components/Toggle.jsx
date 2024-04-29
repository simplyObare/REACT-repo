import { useState } from 'react'

export default function Toggle() {
  const [toggle, setToggle] = useState(false)

  // const handleToggle = () => {
  //   setToggle(!toggle)
  // }

  return (
    <div className="App">
      <h1>useState Hook</h1>
      <div>
        {toggle ? <p>Hello World</p> : null}

        <button onClick={() => setToggle(!toggle)}>Toggle Text</button>
      </div>
    </div>
  )
}
