import { todoApp } from "./logic"

const createTaskCard = (newTask) => {
    const body = document.querySelector("body")
    const taskCard = document.createElement("div")
    const taskCardLeft = document.createElement("div")
    const taskCardRight = document.createElement("div")
    const taskCheckboxDiv = document.createElement("div")
    const taskCheckboxInput = document.createElement("input")
    const taskNameDiv = document.createElement("div")
    const taskDateDiv = document.createElement("div")
    const taskDateInput = document.createElement("input")
    const taskDeleteDiv = document.createElement("div")
    const taskDeleteBtn = document.createElement("button")

    taskCheckboxDiv.appendChild(taskCheckboxInput)
    taskDateDiv.appendChild(taskDateInput)
    taskDeleteDiv.appendChild(taskDeleteBtn)
    taskCardLeft.appendChild(taskCheckboxDiv)
    taskCardLeft.appendChild(taskNameDiv)
    taskCardRight.appendChild(taskDateDiv)
    taskCardRight.appendChild(taskDeleteDiv)
    taskCard.appendChild(taskCardLeft)
    taskCard.appendChild(taskCardRight)
    body.appendChild(taskCard)
    // append to the place that will hold all task cards (not created yet)

    taskCard.classList.add("task-card")
    taskCheckboxInput.setAttribute("type", "checkbox")
    taskCheckboxInput.value = "complete"
    taskNameDiv.textContent = newTask
    const today = new Date() // the default date is the day of creation
    taskDateInput.valueAsDate = today // the date cannot be set to a past day
    taskDateInput.setAttribute("min", today)
    taskDeleteBtn.textContent = "✖"
    taskDeleteBtn.classList.add("task-del-btn")
    taskDeleteBtn.classList.add("task-del")
}

const createProjectCard = (newProject) => {
    const projectCard = document.createElement("div")
    const projectBtn = document.createElement("button")
    const projectDelBtn = document.createElement("button")

    projectCard.appendChild(projectBtn)
    projectCard.appendChild(projectDelBtn)
    // append to the sidebar underneath "Projects"
    // const reference = document.querySelector("#add-project-btn")
    // projectDiv.insertBefore(projectCard, reference.parentElement)

    projectBtn.textContent = newProject
    projectBtn.classList.add("project-name")
    projectDelBtn.textContent = "✖"
    projectDelBtn.classList.add("project-del-btn")
    projectCard.classList.add("project-card")
}

export { createProjectCard, createTaskCard }