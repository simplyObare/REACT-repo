import './App.css'
import useToggle from './hooks/useToggle'

function App() {
  const [isVisible, toggle] = useToggle()

  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && <p>Hide Text</p>}
    </div>
  )
}

export default App
