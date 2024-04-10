import TypedItem from './TypedItem'
import styles from './todolist.module.css'

export default function ToDoList({ typed, setTyped }) {
  const sortedToDos = typed
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done))

  return (
    <div className={styles.list}>
      {sortedToDos.map((item) => (
        <TypedItem
          key={item.name}
          item={item}
          typed={typed}
          setTyped={setTyped}
        />
      ))}
    </div>
  )
}
