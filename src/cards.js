import { todoApp } from "./logic"

const createTaskCard = (newTask) => {
    const taskList = document.querySelector("#display-tasks-div")
    const taskCard = document.createElement("div")
    const cardLeft = document.createElement("div")
    const cardRight = document.createElement("div")
    const checkbox = document.createElement("input")
    const taskTitle = document.createElement("span")
    const taskDate = document.createElement("input")
    const deleteBtn = document.createElement("button")

    taskCard.classList.add("task-card")
    const idName = "#" + newTask
    taskCard.setAttribute("id", idName)
    cardLeft.classList.add("card-left")
    cardRight.classList.add("card-right")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("value", "completed")
    taskTitle.classList.add("task-title")
    taskDate.setAttribute("type", "date")
    // for simplicity, when creating a task, no date input is provided
    // so the date is set to today by default. it can be changed later
    const today = new Date()
    taskDate.valueAsDate = today
    taskDate.setAttribute("min", today)
    deleteBtn.classList.add("task-del")
    deleteBtn.setAttribute("id", newTask + "-del")

    taskCard.textContent = newTask
    deleteBtn.textContent = "✖"

    cardRight.appendChild(taskDate)
    cardRight.appendChild(deleteBtn)
    cardLeft.appendChild(checkbox)
    cardLeft.appendChild(taskTitle)
    taskCard.appendChild(cardLeft)
    taskCard.appendChild(cardRight)

    taskList.appendChild(taskCard)
}

const createProjectCard = (newProject) => {
    const projectDiv = document.querySelector("#projects")
    const projectCard = document.createElement("div")
    const cardName = document.createElement("button")
    const cardDelete = document.createElement("button")
    const reference = document.querySelector("#add-project-btn")

    projectCard.setAttribute("display", "flex")
    cardName.setAttribute("flex", "1")
    cardName.setAttribute("id", newProject)
    cardDelete.setAttribute("id", newProject + "-del")

    cardName.textContent = newProject
    cardDelete.textContent = "✖"
    projectCard.appendChild(cardName)
    projectCard.appendChild(cardDelete)
    projectDiv.insertBefore(projectCard, reference.parentElement)
}

export { createProjectCard, createTaskCard }