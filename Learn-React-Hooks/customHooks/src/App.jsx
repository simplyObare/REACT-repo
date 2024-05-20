import './App.css'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [name, setName] = useLocalStorage('name', '')

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <h2>Hello {name}!</h2>
    </>
  )
}

export default App
