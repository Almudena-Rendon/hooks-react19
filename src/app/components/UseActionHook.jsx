'use client'

import { useActionState } from 'react'
import { submitName } from '@/app/actions/submitName'
import SubmitButton from './SubmitButton'

const UseActionHook = () => {
// This form uses `useActionState` to handle submission.
// It sends the form data to a mock server action function (`submitName`),
// and stores the returned message in local state to display feedback to the user.

// `useFormStatus` in the button component gives us access to the current status of the form,
// allowing us to manage loading states or disable the button during submission.

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
