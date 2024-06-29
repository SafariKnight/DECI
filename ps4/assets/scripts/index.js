function submitTask() {
  const input = document.querySelector("#task-input").value

  if (input === "") return

  const newTask = document.createElement("li")
  newTask.textContent = input

  const removeButton = document.createElement("button")
  removeButton.addEventListener("click", () => {
    newTask.remove()
  })

  removeButton.textContent = "Remove"

  newTask.appendChild(removeButton)

  const taskList = document.querySelector("#task-list")
  taskList.appendChild(newTask)
}
