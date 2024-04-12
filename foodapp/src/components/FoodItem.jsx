import styles from './fooditem.module.css'

export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={food.image} alt="The dish" />

      <div className={styles.content}>
        <p className={styles.title}>{food.title}</p>
      </div>

      <div className={styles.btnContainer}>
        <button
          onClick={() => {
            console.log(food.id)
            setFoodId(food.id)
          }}
          className={styles.button}
        >
          View Recipe
        </button>
      </div>
    </div>
  )
}
