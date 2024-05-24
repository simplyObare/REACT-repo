import { useState } from 'react'

const TodoInput = ({ handleTodos }) => {
  const [todoValue, setTodoValue] = useState('')

  return (
    <header>
      <input
        type="text"
        placeholder="Enter todo..."
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button
        onClick={() => {
          handleTodos(todoValue)
          setTodoValue('')
        }}
      >
        Add
      </button>
    </header>
  )
}

export default TodoInput
