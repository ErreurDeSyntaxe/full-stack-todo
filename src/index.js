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
    
})()

let app = todoApp()
app.addProject("Inbox")