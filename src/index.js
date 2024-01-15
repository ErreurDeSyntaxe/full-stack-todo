import _ from 'lodash'
import { todoApp } from './logic'
import { buildHeader } from './page'
import { buildSidebar } from './page'
import { buildMain } from './page'
import { buildProjectInput, buildTaskInput } from './buttons'
import { createProjectCard } from './cards'
import { createTaskCard } from './cards'

const buildPage = (() => {
    buildHeader()
    buildSidebar()
    buildMain()
    buildProjectInput()
    buildTaskInput()
})()

const activateProjectButtons = (() => {
    const addProjectBtn = document.querySelector("#add-project-btn")
    const cancelBtn = document.querySelector("#cancel-project-btn")
    const confirmBtn = document.querySelector("#confirm-project-btn")
    const projectInputDiv = document.querySelector("#project-input-div")
    const projectInput = document.querySelector("#project-input")

    addProjectBtn.addEventListener("click", () => {
        addProjectBtn.setAttribute("hidden", true)
        projectInputDiv.removeAttribute("hidden")
        projectInput.focus()

        cancelBtn.addEventListener("click", () => {
            projectInput.textContent = ""
            addProjectBtn.removeAttribute("hidden")
            projectInputDiv.setAttribute("hidden", true)
            return
        })
    
        confirmBtn.addEventListener("click", (e) => {
            e.preventDefault()
            if (projectInput.value === "") {
                projectInput.focus()
                return
            }

            const projectTitle = projectInput.value
            projectInput.value = ""
            addProjectBtn.removeAttribute("hidden")
            projectInputDiv.setAttribute("hidden", true)

            // check if the name is available or taken
            if (app.addProject(projectTitle)) {
                createProjectCard(projectTitle)
                let sidebarName = "#" + projectTitle
                let sidebarDel = "#" + projectTitle + "-del"
                const cardNameBtn = document.querySelector(sidebarName)
                const cardDeleteBtn = document.querySelector(sidebarDel)

                cardNameBtn.addEventListener("click", () => {
                    let currentProject = app.selectProject(projectTitle)
                })

                cardDeleteBtn.addEventListener("click", () => {
                    app.deleteProject(projectTitle)
                    cardDeleteBtn.parentElement.remove()
                })
            }
        })
    })
})()

const activateTaskButtons = (() => {
    const addTaskBtn = document.querySelector("#add-task-btn")
    const cancelBtn = document.querySelector("#cancel-task-btn")
    const confirmBtn = document.querySelector("#confirm-task-btn")
    const taskInputDiv = document.querySelector("#task-input-div")
    const taskInput = document.querySelector("#task-input")

    addTaskBtn.addEventListener("click", () => {
        addTaskBtn.setAttribute("hidden", true)
        taskInputDiv.removeAttribute("hidden")
        taskInput.focus()

        cancelBtn.addEventListener("click", () => {
            taskInput.textContent = ""
            addTaskBtn.removeAttribute("hidden")
            taskInputDiv.setAttribute("hidden", true)
            return
        })

        confirmBtn.addEventListener("click", (e) => {
            e.preventDefault()
            if (taskInput.value === "") {
                taskInput.focus()
                return
            }

            const taskName = taskInput.value
            taskInput.value = ""
            addTaskBtn.removeAttribute("hidden")
            taskInputDiv.setAttribute("hidden", true)

            // // check if the name is available or taken
            // if (app.addProject(taskName)) {
            //     createProjectCard(taskName)
            //     let sidebarName = "#" + taskName
            //     let sidebarDel = "#" + taskName + "-del"
            //     const cardNameBtn = document.querySelector(sidebarName)
            //     const cardDeleteBtn = document.querySelector(sidebarDel)

            //     cardNameBtn.addEventListener("click", () => {
            //         let currentProject = app.selectProject(taskName)
            //     })

            //     cardDeleteBtn.addEventListener("click", () => {
            //         app.deleteProject(taskName)
            //         cardDeleteBtn.parentElement.remove()
            //     })
            // }
        })
    })
})()

let app = todoApp()
app.addProject("Inbox")