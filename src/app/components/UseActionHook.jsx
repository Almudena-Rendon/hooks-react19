'use client'

import { useActionState } from 'react'
import { submitName } from '@/app/actions/submitName'
import SubmitButton from './SubmitButton'

const UseActionHook = () => {
  // Here, `submitName` is the function handling data submission, and `message` stores the response or message after submission

  const [message, formAction] = useActionState(submitName, '')

  return (
    <>
      <h1>useActionState Name Form</h1>
      <form action={formAction} className="input-group">
        <label htmlFor="name-input" className="label-input">
          Your Name
        </label>
        <input
          id="name-input"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
        <SubmitButton text="Submit Name" />
      </form>

      {message && <p>{message}</p>}
    </>
  )
}

export default UseActionHook
