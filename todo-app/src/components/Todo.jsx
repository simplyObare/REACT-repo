import { useState } from 'react'
import Form from './Form'
import ToDoList from './ToDoList'
import Footer from './Footer'

export default function Todo() {
  const [typed, setTyped] = useState([])
  const completedToDos = typed.filter((todo) => todo.done).length
  const totalToDos = typed.length
  return (
    <div>
      <Form typed={typed} setTyped={setTyped} />
      <ToDoList typed={typed} setTyped={setTyped} />
      <Footer completedToDos={completedToDos} totalToDos={totalToDos} />
    </div>
  )
}
