const buildProjectInput = () => {
    const projectDiv = document.querySelector("#projects")
    const projectInputDiv = document.createElement("div")
    const confirmBtn = document.createElement("button")
    const cancelBtn = document.createElement("button")
    const projectInput = document.createElement("input")

    projectInputDiv.setAttribute("id", "project-input-div")
    projectInputDiv.setAttribute("hidden", true)
    confirmBtn.classList.add("confirm-btn")
    confirmBtn.setAttribute("id", "confirm-project-btn")
    confirmBtn.setAttribute("type", "submit")
    cancelBtn.classList.add("cancel-btn")
    cancelBtn.setAttribute("id", "cancel-project-btn")
    projectInput.setAttribute("id", "project-input")
    projectInput.setAttribute("type", "text")
    projectInput.required = true

    confirmBtn.textContent = "Add"
    cancelBtn.textContent = "Cancel"
    projectInput.setAttribute("placeholder", "Title")

    projectInputDiv.appendChild(projectInput)
    projectInputDiv.appendChild(confirmBtn)
    projectInputDiv.appendChild(cancelBtn)
    projectDiv.appendChild(projectInputDiv)
}

const buildTaskInput = () => {
    console.log("Write me! I'm in buttons.js")
}

const createTaskCard = () => {
    const taskCard = document.createElement("div")
    const cardLeft = document.createElement("div")
    const cardRight = document.createElement("div")
    const checkbox = document.createElement("input")
    const taskTitle = document.createElement("span")
    const taskDate = document.createElement("input")
    const deleteBtn = document.createElement("button")

    taskCard.classList.add("task-card")
    cardLeft.classList.add("card-left")
    cardRight.classList.add("card-right")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("value", "completed")
    taskTitle.classList.add("task-title")
    taskDate.setAttribute("type", "date")
    taskDate.setAttribute("value", new Date())
    deleteBtn.classList.add("task-del")
    deleteBtn.textContent = "✖"

    cardRight.appendChild(taskDate)
    cardRight.appendChild(deleteBtn)
    cardLeft.appendChild(checkbox)
    cardLeft.appendChild(taskTitle)
    taskCard.appendChild(cardLeft)
    taskCard.appendChild(cardRight)

    return taskCard
}

export { buildTaskInput, buildProjectInput }