import _ from 'lodash'
import { todoApp } from './logic'
import { buildHeader } from './page'
import { buildSidebar } from './page'
import { buildMain } from './page'
import { buildProjectInput } from './buttons'

const buildPage = (() => {
    buildHeader()
    buildSidebar()
    buildMain()
    buildProjectInput()
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
            app.addProject(projectTitle)
            // call a create project card so that the sidebar shows the newly created project
            return projectTitle
        })
    })
})()

const activateTaskButtons = (() => {
    console.log("Write me! I'm in index.js")
})()

let app = todoApp()