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
    const projectContentDiv = document.querySelector("#project-content")
    const taskInputDiv = document.createElement("div")
    const confirmBtn = document.createElement("button")
    const cancelBtn = document.createElement("button")
    const taskInput = document.createElement("input")

    taskInputDiv.setAttribute("id", "task-input-div")
    taskInputDiv.setAttribute("hidden", true)
    confirmBtn.classList.add("confirm-btn")
    confirmBtn.setAttribute("id", "confirm-task-btn")
    confirmBtn.setAttribute("type", "submit")
    cancelBtn.classList.add("cancel-btn")
    cancelBtn.setAttribute("id", "cancel-task-btn")
    taskInput.setAttribute("id", "task-input")
    taskInput.setAttribute("type", "text")
    taskInput.required = true

    confirmBtn.textContent = "Add"
    cancelBtn.textContent = "Cancel"
    projectInput.setAttribute("placeholder", "Task Name")

    taskInput.appendChild(taskInput)
    taskInput.appendChild(confirmBtn)
    taskInput.appendChild(cancelBtn)
    projectContentDiv.appendChild(taskInput)
}

export { buildTaskInput, buildProjectInput }