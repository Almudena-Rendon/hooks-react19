'use client'

import { useState, startTransition, useOptimistic } from 'react'
import SubmitButton from './SubmitButton'

const UseOptimisticHook = () => {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  // useOptimistic lets us show the new todo immediately while the actual state updates
  const [visibleList, addTemporaryItem] = useOptimistic(
    todos,
    (currentList, newItem) => {
      return [...currentList, newItem]
    }
  )

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return

    startTransition(() => {
      addTemporaryItem(newTodo)
      setTodos((prevTodos) => [...prevTodos, newTodo])
      setNewTodo('')
    })
  }

  return (
    <>
      <h1>useOptimistic Todo List</h1>

      <form onSubmit={handleAddTodo} className="input-group">
        <label htmlFor="todo-input" className="label-input">
          New Task
        </label>
        <input
          id="todo-input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new task"
        />
        {/* Custom button component that uses useFormStatus internally */}
        <SubmitButton text="Add Todo" />
      </form>

      <ul>
        {visibleList?.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  )
}

export default UseOptimisticHook
