# Exploring the New Hooks in React 19: `useOptimistic`, `useFormStatus`, and `useActionState`

![image](https://github.com/user-attachments/assets/cc37dfcf-4960-46c2-b368-63087ca72d1e)

React 19 was launched in 2024 and introduces a new set of powerful hooks that transform how we handle forms, user interactions, and server-side logic. In this article, we will explore the benefits of these new hooks and how to use them.

1. [useOptimistic](#useOptimistic)
2. [useFormStatus](#useFormStatus)
3. [useActionState](#useActionState)

---

## `useOptimistic`: Build Fast-Feeling UIs

The `useOptimistic` hook in React 19 handles optimistic state updates, which means it returns a temporary version of the data before an asynchronous operation (such as an API call) has finished.

### Why it’s useful

When you perform a time-consuming action, like submitting a form or updating a list item, `useOptimistic` allows the change to appear immediately in the UI, even if it's still being processed in the background.  
This results in a smoother and faster user experience.

### Example usage

This hook helps manage a temporary, optimistic version of the `todos` list—updating instantly in the UI, even before the server confirms the change. It makes your app feel faster and more responsive by displaying the changes immediately and syncing with the actual data once the backend responds.

```jsx
const [visibleList, addTemporaryItem] = useOptimistic(todos, (currentList, newItem) => {
  return [...currentList, newItem]
})
```

- **`todos`**:  
  This is the real, up-to-date list of items from your state, probably loaded from a database or API.

- **`(currentList, newItem) => [...currentList, newItem]`**:  
  This function describes how to update the list optimistically. It takes the current list and adds the new item to it.

- **`visibleList`**:  
  This is the version of the list displayed on the screen, including any temporary (optimistic) items added with `addTemporaryItem`, even if they haven't been saved yet.

- **`addTemporaryItem`**:  
  This function allows you to add a new item optimistically.  
  When called, React immediately updates `visibleList` with the new item—even though the actual `todos` array hasn't changed yet.

## `useFormStatus`: Track Form State with Ease

The `useFormStatus` hook in React 19 is designed to help you track the status of a form submission, making it easier to provide real-time feedback to users.

### Why it’s useful

With `useFormStatus`, you no longer need to manually manage extra state to track form submission. React handles it for you automatically, so your code becomes cleaner and your forms more responsive.  
It improves the user experience by clearly indicating when something is happening in the background.

### Example usage

In previous versions of React, you would typically create a loading state to control the submit button or show a spinner. With `useFormStatus`, that’s no longer necessary.  
React gives you direct access to the form’s current status—like `pending`—which you can use to conditionally update the UI and display feedback messages.

```jsx
function SubmitButton() {
  const { pending } = useFormStatus()
  return <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
}
```

- **`pending`**:  
  A boolean value (`true` or `false`) that tells you whether the form is currently being submitted.
  - **`true`**: The form is in the middle of a submission. You can use this to disable buttons, show a loading spinner, or prevent duplicate submissions.
  - **`false`**: The form is idle or the submission has finished.

## `useActionState`: Manage Action States Efficiently

The `useActionState` hook in React 19 helps you manage the state of asynchronous actions in your application, such as sending a request to the server or performing a background task.  
It tells you whether the action is currently pending, successful, or has failed, allowing you to update the UI accordingly.

### Why it’s useful

The `useActionState` hook in React 19 helps you manage the state of asynchronous actions in your application, such as sending a request to the server or performing a background task.  
It tells you whether the action is currently pending, successful, or has failed, allowing you to update the UI accordingly.

### Example usage:

Without `useActionState`, you'd typically need to manage multiple state variables like `isLoading`, `isError`, or `isSuccess`. This adds extra complexity and room for bugs.  
With `useActionState`, a single state value tracks everything. This simplifies your code, reduces boilerplate, and makes it easier to handle feedback in the UI.

```jsx
function MyComponent() {
  const { state, performAction } = useActionState()
  return (
    <div>
      <button onClick={performAction} disabled={state === 'pending'}>
        {state === 'pending' ? 'Loading...' : 'Submit'}
      </button>
      {state === 'success' && <p>Action was successful!</p>}
      {state === 'error' && <p>Something went wrong. Try again!</p>}
    </div>
  )
}
```
- **`state`**: Represents the current status of the action.
  - **`'pending'`**: The action is in progress.
  - **`'success'`**: The action completed successfully.
  - **`'error'`**: Something went wrong.

- **`performAction`**: A function that triggers your async action and automatically updates the state based on the result.

## Final thoughts

React 19 introduces powerful new hooks that simplify common patterns in modern web apps. They reduce the need for extra state management, improve user experience with instant feedback, and keep your code cleaner and easier to maintain.

By using these hooks, you can build fast, responsive interfaces with less effort and more clarity.

If you haven’t tried React 19 yet, this is a great reason to dive in and start experimenting with these new patterns.


