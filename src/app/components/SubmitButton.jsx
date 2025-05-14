'use client'

import { useFormStatus } from 'react-dom'

const SubmitButton = ({ text }) => {
  const { pending } = useFormStatus()

  // `useFormStatus` gives us access to the current status of the parent form.
  // `pending` is true while the form is submitting.
  // We can use this to disable the button or show a loading indicator.
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : `${text}`}
    </button>
  )
}

export default SubmitButton
