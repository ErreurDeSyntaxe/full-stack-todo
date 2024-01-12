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

const createProject = () => {
    const projectsDiv = document.querySelector("#projects")
    const newProject = document.createElement("div")
    const newButton = document.createElement("button")
    const deleteProject = document.createElement("button")

    
}

export { createTaskCard }