# Exploring the New Hooks in React 19: `useOptimistic`, `useFormStatus`, and `useActionState`

React 19 was launched in 2024 and introduces a new set of powerful hooks that transform how we handle forms, user interactions, and server-side logic. In this article, we will explore the benefits of these new hooks and how to use them.

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
})```

- **`todos`**:  
  This is the real, up-to-date list of items from your state, probably loaded from a database or API.

- **`(currentList, newItem) => [...currentList, newItem]`**:  
  This function describes how to update the list optimistically. It takes the current list and adds the new item to it.

- **`visibleList`**:  
  This is the version of the list displayed on the screen, including any temporary (optimistic) items added with `addTemporaryItem`, even if they haven't been saved yet.

- **`addTemporaryItem`**:  
  This function allows you to add a new item optimistically.  
  When called, React immediately updates `visibleList` with the new item—even though the actual `todos` array hasn't changed yet.
