import { useState } from 'react'

export default function Colorizer() {
  const [color, setColor] = useState('#6d0e0e')

  const changeColor = () => {
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
  }

  return (
    <div className="colorizer">
      <div className="box" style={{ backgroundColor: color }}>
        {color}
      </div>
      <button onClick={changeColor}>change color</button>
    </div>
  )
}
