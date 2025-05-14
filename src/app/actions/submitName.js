export async function submitName(_prevState, formData) {
  const name = formData.get('name')
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate delay 1 second
  return `Hello, ${name}!`
}
