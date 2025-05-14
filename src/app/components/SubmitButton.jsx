'use client'

import { useFormStatus } from 'react-dom'

const SubmitButton = ({ text }) => {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : `${text}`}
    </button>
  )
}

export default SubmitButton
