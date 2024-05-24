const TodoCard = ({ children, handleDeleteTodo, index }) => {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleDeleteTodo(index)
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  )
}

export default TodoCard
