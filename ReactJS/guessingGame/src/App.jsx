import './App.css'

function App() {
  const evaluateGuess = () => {
    let userInputEl = document.getElementById('user_guess')
    let userInputVal = userInputEl.value

    console.log(userInputVal)
  }

  return (
    <>
      <div>
        <div>
          <input
            type="number"
            id="user_guess"
            placeholder="Please guess a number"
          />
        </div>
        <div>
          <button onClick={evaluateGuess}>Verify</button>
        </div>
      </div>
    </>
  )
}

export default App
