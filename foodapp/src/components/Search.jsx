import { useEffect, useState } from 'react'
import styles from './search.module.css'

const URL = 'https://api.spoonacular.com/recipes/complexSearch'
const API_KEY = '55f0e2e501df44beae577d9fb9ba4c61'

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState('pizza')
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
      const responseData = await response.json()
      console.log(responseData.results)
      setFoodData(responseData.results)
    }
    fetchFood()
  }, [query])

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}
