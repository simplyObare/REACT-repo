import './App.css'
import User from './components/User'
import WithLoader from './components/WithLoader'

const UserWithLoader = WithLoader(User)
function App() {
  return (
    <div className="App">
      <UserWithLoader />
    </div>
  )
}

export default App
