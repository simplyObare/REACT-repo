import { useState } from 'react'

const WithLoader = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000)

    return <div>{loading ? 'Loading...' : <WrappedComponent {...props} />}</div>
  }
}

export default WithLoader
