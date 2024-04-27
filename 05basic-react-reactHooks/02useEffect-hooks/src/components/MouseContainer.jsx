import { useState } from 'react'
import Mouse from './Mouse'

export default function MouseContainer() {
  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display)
        }}
      >
        Toggle display
      </button>
      {display && <Mouse />}
    </div>
  )
}
