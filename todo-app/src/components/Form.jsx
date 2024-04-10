import { useState } from 'react'
import styles from './form.module.css'

export default function Form({ typed, setTyped }) {
  const [todo, setToDo] = useState({ name: '', done: false })

  function handleSubmit(e) {
    e.preventDefault()
    setTyped([...typed, todo])
    setToDo({ name: '', done: false })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.todoform}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            typed="text"
            value={todo.name}
            onChange={(e) => setToDo({ name: e.target.value, done: false })}
            placeholder="Enter todo item..."
          />
          <button className={styles.modernBtn} typed="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}
