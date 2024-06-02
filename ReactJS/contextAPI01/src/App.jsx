import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import MyCounter from './components/MyCounter'
import CounterContextProvider from './context/CounterContext'

function App() {
  return (
    <>
      <CounterContextProvider>
        <h1>Context API</h1>
        <MyCounter />
        <ComponentA />
        <ComponentB />
      </CounterContextProvider>
    </>
  )
}

export default App
