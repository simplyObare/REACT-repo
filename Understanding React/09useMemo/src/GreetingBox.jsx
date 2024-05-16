/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

const GreetingBox = ({ getGreeting }) => {
  const [greeting, setGreeting] = useState()

  useEffect(() => {
    setGreeting(getGreeting())
    console.log('GreetingBox: useEffect')
  }, [getGreeting])

  return (
    <div>
      <h2>{greeting}</h2>
    </div>
  )
}

export default GreetingBox
