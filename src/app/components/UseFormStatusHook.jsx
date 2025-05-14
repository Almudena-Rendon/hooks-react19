'use client'

import { useState } from 'react'
import { submitTask } from '@/app/actions/submitTask'
import SubmitButton from './SubmitButton'

const UseFormStatusHook = () => {
  const [tasks, setTasks] = useState([])

  // This function handles the form submission.
  // It first adds the new task to local state, then sends the form data to a mock server action function (simulated with a delay).

  async function handleSubmit(formData) {
    const task = formData.get('task')
    setTasks((prev) => [...prev, task])
    await submitTask(formData)
  }

  return (
    <>
      <h1>useFormStatus Task Form</h1>
      <form action={handleSubmit} className="input-group">
        <label htmlFor="task-input" className="label-input">
          New Task
        </label>
        <input
          id="task-input"
          type="text"
          name="task"
          placeholder="Enter a new task"
          required
        />
        {/* Custom button component that uses useFormStatus internally */}
        <SubmitButton text="Add Task" />
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  )
}

export default UseFormStatusHook
