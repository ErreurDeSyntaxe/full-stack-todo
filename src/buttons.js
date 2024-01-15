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
    cancelBtn.setAttribute("type", "button")
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
    const addTaskDiv = document.querySelector("#add-task")
    const newTaskDiv = document.createElement("div")
    const upperDiv = document.createElement("div")
    const lowerDiv = document.createElement("div")
    const input = document.createElement("input")
    const confirmBtn = document.createElement("button")
    const cancelBtn = document.createElement("button")

    newTaskDiv.setAttribute("id", "task-input-div")
    newTaskDiv.setAttribute("hidden", true)
    confirmBtn.classList.add("confirm-btn")
    confirmBtn.setAttribute("id", "confirm-task-btn")
    confirmBtn.setAttribute("type", "submit")
    cancelBtn.classList.add("cancel-btn")
    cancelBtn.setAttribute("id", "cancel-task-btn")
    cancelBtn.setAttribute("type", "button")
    input.setAttribute("id", "task-input")
    input.setAttribute("placeholder", "Task Name")
    confirmBtn.textContent = "Add"
    cancelBtn.textContent = "Cancel"

    upperDiv.appendChild(input)
    lowerDiv.append(confirmBtn)
    lowerDiv.append(cancelBtn)
    newTaskDiv.appendChild(upperDiv)
    newTaskDiv.appendChild(lowerDiv)
    addTaskDiv.appendChild(newTaskDiv)
}

export { buildTaskInput, buildProjectInput }