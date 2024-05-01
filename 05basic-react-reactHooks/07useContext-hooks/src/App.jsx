import './App.css'
import ComponentE from './components/ComponentE'

export const UserContext = React.createContext()

function App() {
  return (
    <div>
      <UserContext.Provider value={'Obare'}>
        <ComponentE />
      </UserContext.Provider>
    </div>
  )
}

export default App
