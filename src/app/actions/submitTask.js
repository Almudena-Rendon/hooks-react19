export async function submitTask(formData) {
  const task = formData.get('task')
  console.log('Task submitted:', task)

  await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate delay 2 seconds
}
