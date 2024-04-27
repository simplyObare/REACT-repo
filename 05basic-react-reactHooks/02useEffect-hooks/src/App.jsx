import './App.css'
import CounterOne from './components/CounterOne'
import IntervalCounter from './components/IntervalCounter'
// import Mouse from './components/Mouse'
import MouseContainer from './components/MouseContainer'

function App() {
  return (
    <>
      <CounterOne />
      {/* <Mouse /> */}
      <MouseContainer />
      <IntervalCounter />
    </>
  )
}

export default App
