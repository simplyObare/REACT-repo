import { useEffect, useState } from 'react'
import styles from './fooddetails.module.css'

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
  const API_KEY = '55f0e2e501df44beae577d9fb9ba4c61'
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`)
      const responseData = await response.json()
      console.log(responseData)
      setFood(responseData)
      setIsLoading(false)
    }
    fetchFood()
  }, [foodId])
  return (
    <div className={styles.card}>
      <div>
        <h1 className={styles.title}>{food.title}</h1>
        <img
          className={styles.image}
          src={food.image}
          alt="the selected dish"
        />
        <div>
          <h2 className={styles.title}>Recipe Details</h2>
          <div className={styles.details}>
            <span>
              <strong>⏲️ Ready in:</strong> {food.readyInMinutes} Minutes
            </span>
            <span>
              👪<strong>Serves:</strong> {food.servings} people
            </span>
            <span>
              <strong>
                {food.vegetarian ? '🥕 vegetarian' : '🍖 Non-vegetarian'}
              </strong>
            </span>
            <span>
              <strong>{food.vegan ? '🌱 vegan' : ''}</strong>
            </span>
          </div>
          <span className={styles.price}>
            <strong>${(food.pricePerServing / 100).toFixed(2)}</strong>
          </span>
        </div>
      </div>
      <div>
        <h2 className={styles.title}>Instructions</h2>
        <div className={styles.instructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedINstructions[0].steps.map((step) => {
                ;<li>{step.step}</li>
              })
            )}
          </ol>
        </div>
      </div>
    </div>
  )
}
