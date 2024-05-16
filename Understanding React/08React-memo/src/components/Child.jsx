import React from 'react'

const Child = ({ header }) => {
  return (
    <div className="child">
      <h1>{header}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti harum
        nobis quibusdam, inventore aut nisi soluta debitis ducimus libero ab
        alias quam nesciunt excepturi eos sapiente quo molestiae qui adipisci!
      </p>
    </div>
  )
}

export default React.memo(Child)
