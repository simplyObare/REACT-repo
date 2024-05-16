import { useRef, useEffect } from 'react'

const Focus = () => {
  const inputElementRef = useRef()

  useEffect(() => {
    inputElementRef.current.focus()
  }, [])

  return (
    <div>
      <input type="text" ref={inputElementRef} />
    </div>
  )
}

export default Focus
