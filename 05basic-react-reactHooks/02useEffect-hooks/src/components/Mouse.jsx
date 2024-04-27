import { useState, useEffect } from 'react'

export default function Mouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = (e) => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  // The useEffect hook is used to perform side effects in function components.
  // Here, it is used to add an event listener for the 'mousemove' event and
  // call the `logMousePosition` function whenever the mouse moves.
  // The empty array as the second argument to useEffect means that this effect
  // should only run once, on the initial render of the component.
  // The function returned from useEffect is the cleanup function,
  // which is called before the component is unmounted.
  // It removes the event listener so that the `logMousePosition` function
  // is no longer called when the mouse moves.
  useEffect(() => {
    console.log('useEffect called')
    // Add event listener
    window.addEventListener('mousemove', logMousePosition)

    // Cleanup function
    return () => {
      console.log('Component unmounting code')
      // Remove event listener
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, []) // Empty array means run effect only on mount and unmount

  //   NOTE: to call an effect only once/on initial renders jus place an empty array on the useEffect hook

  return (
    <div>
      Hooks X - {x} and Y - {y}
    </div>
  )
}

/**
 * The useEffect hook is used to perform side effects in function components.
 * It is used to handle any value that needs to be changed or updated outside of the
 * component's render method, such as setting up event listeners, fetching data, or
 * manipulating the DOM.
 *
 * You use useEffect whenever you need to perform a side effect that should only occur
 * once after the component has rendered, or when certain values change.
 *
 * The cleanup function returned from useEffect is called before the component is
 * unmounted, and it is used to clean up any values, event listeners, or other
 * resources that were set up in the useEffect hook.
 *
 * Common use cases for useEffect include setting up and tearing down event listeners,
 * fetching data from an API, and updating the DOM in response to changes in props
 * or state.
 */
