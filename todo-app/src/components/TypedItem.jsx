import styles from './typeditem.module.css'

const TypedItem = ({ item, typed, setTyped }) => {
  function handleDelete(item) {
    console.log('delete clicked for item', item)
    setTyped(typed.filter((todo) => todo !== item))
  }
  function handleClick(name) {
    const newArray = typed.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    )
    setTyped(newArray)
  }
  const lineThrough = item.done ? styles.completed : ''

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={lineThrough} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteBtn}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  )
}

export default TypedItem
