import TodoCard from './TodoCard'

const TodoList = ({ todos }) => {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...todos} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}

export default TodoList
