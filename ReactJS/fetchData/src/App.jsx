import './App.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [predictedAge, setPredictedAge] = useState(null)
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data)
    })
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={fetchData}>Predict Age</button>

      <h2>Predicted Age: {predictedAge?.age} </h2>
    </div>
  )
}

export default App
