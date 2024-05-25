import './App.css'
import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'newUserInput':
      return { ...state, userInput: action.payload }
    case 'tgColor':
      return { ...state, color: !state.color }
    default:
      throw new Error()
  }
}

// const ACTION={
//   INCREMENT:'increment',
//   DECREMENT:'decrement',
//   NEW_USER_INPUT:'newUserInput',
//   TG_COLOR:'tgColor'
// }

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    color: false,
    userInput: '',
  })

  return (
    <main className="App" style={{ color: state.color ? '#fff' : '#fff952' }}>
      <input
        type="text"
        placeholder="Enter text"
        value={state.userInput}
        style={{ width: 300, height: 30 }}
        onChange={(e) =>
          dispatch({ type: 'newUserInput', payload: e.target.value })
        }
      />
      <br />
      <p>{state.count}</p>
      <section>
        <button
          onClick={() => {
            dispatch({ type: 'increment' })
          }}
          style={{ marginRight: 10 }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'decrement' })
          }}
          style={{ marginRight: 10 }}
        >
          -
        </button>
        <button onClick={() => dispatch({ type: 'tgColor' })}>color</button>
      </section>
      <br />
      <p>{state.userInput}</p>
    </main>
  )
}

export default App
