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

export { buildTaskInput, buildProjectInput }