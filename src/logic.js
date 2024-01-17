function todoApp() {
    const projectList = []
    let currentProject = 0;

    const addProject = (title) => {
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].getName() == title) {
                return false
            }
        }
        projectList.push(Project(title))
        currentProject = projectList.length - 1
        return true
    }

    const deleteProject = (string) => {
        if (string != "Inbox") {
            for (let i = 0; i < projectList.length; i++) {
                if (projectList[i].getName() == string) {
                    projectList.splice(i, 1)
                    selectProject("Inbox")
                    break
                }
            }
        } else {
            console.log("Cannot delete default project 'Inbox'")
        }
    }

    const getProjects = () => projectList

    const printProjects = () => {
        for (let i = 0; i < projectList.length; i++) {
            if (i == currentProject) {
                if (projectList[i].getTasks().length == 0) {
                    console.log(">> Project " + i + ": " + projectList[i].getName() + " task: NO TASKS IN THIS PROJECT")
                }
                for (let j = 0; j < projectList[i].getTasks().length; j++) {
                    console.log(">> Project " + i + ": " + projectList[i].getName() + " task " + j + ": " + projectList[i].getTasks()[j].getName())
                }
            }
            else {
                if (projectList[i].getTasks().length == 0) {
                    console.log("Project " + i + ": " + projectList[i].getName() + " task: NO TASKS IN THIS PROJECT")
                }
                for (let j = 0; j < projectList[i].getTasks().length; j++) {
                    console.log("Project " + i + ": " + projectList[i].getName() + " task: " + j + " " + projectList[i].getTasks()[j].getName())
                }
            }
        }
    }

    const selectProject = (string) => {
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].getName() == string) {
                currentProject = i
            }
        }
    }

    // returns the array index, not the project itself
    const getCurrentProject = () => currentProject

    return {
        addProject,
        deleteProject,
        getProjects,
        selectProject,
        getCurrentProject,
        printProjects
    }
}

function Project(string) {
    const taskList = []
    let title = string
    
    const addTask = (string) => {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].getName() == string) {
                return false
            }
        }
        taskList.push(Task(string))
        console.log(string + " added to project " + title)
        return true
    }

    const deleteTask = (string) => {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].getName() == string) {
                taskList.splice(i, 1)
                break
            }
        }
    }

    const getName = () => title

    const getTasks = () => taskList

    return { addTask, deleteTask, getTasks, getName }
}

function Task(string) {
    let name = string
    let date = new Date()
    let status = "incomplete"

    const getName = () => name

    const setName = (newName) => name = newName

    const getDate = () => date

    const setDate = (newDate) => date = newDate

    const getStatus = () => status

    const setStatus = (newStatus) => status = newStatus

    return { getName, setName, getDate, setDate, getStatus, setStatus }
}

const createTaskCard = (newTask, project) => {
    const tasks = document.querySelector("#tasks")
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
    tasks.appendChild(taskCard)
    // append to the place that will hold all task cards (not created yet)

    taskCard.classList.add("task-card")
    taskCard.classList.add(project)
    taskCardLeft.classList.add("task-card-left")
    taskCardRight.classList.add("task-card-right")
    taskCheckboxInput.setAttribute("type", "checkbox")
    taskCheckboxInput.value = "complete"
    taskNameDiv.textContent = newTask
    
    taskDateInput.setAttribute("type", "date")
    let today = new Date() // the default date is the day of creation
    taskDateInput.valueAsDate = today
    // the date cannot be set to a past day
    let year = today.getFullYear()
    let month = today.getMonth() + 1 //January is 0
    if (month < 10) {
        month = "0" + month //values need two digits
    }
    let day = today.getDate()
    if (day < 10) {
        day = "0" + day //values need two digits
    }
    taskDateInput.setAttribute("min", `${year}-${month}-${day}`)

    taskDeleteBtn.addEventListener("click", () => {
        app.getProjects()[app.getCurrentProject()].deleteTask(newTask)
        taskCard.remove()
    })

    taskDeleteBtn.textContent = "✖"
    taskDeleteBtn.classList.add("task-del-btn")
}

const createProjectCard = (newProject) => {
    const projects = document.querySelector("#projects")
    const projectCard = document.createElement("div")
    const projectBtn = document.createElement("button")
    const projectDelBtn = document.createElement("button")

    projectCard.appendChild(projectBtn)
    projectCard.appendChild(projectDelBtn)
    projects.appendChild(projectCard)
    // append to the sidebar underneath "Projects"
    // const reference = document.querySelector("#add-project-btn")
    // projectDiv.insertBefore(projectCard, reference.parentElement)

    projectBtn.addEventListener("click", () => {
        app.selectProject(newProject)
        displayCurrentProjectTask()
    })
    projectBtn.textContent = newProject
    projectBtn.classList.add("project-name")

    projectDelBtn.addEventListener("click", () => {
        const allTasks = document.querySelector("#tasks").children
        for (let i = allTasks.length - 1; i >= 0; i--) {
            if (allTasks[i].classList.contains(newProject)) {
                allTasks[i].remove()
            }
        }
        app.deleteProject(newProject)
        projectCard.remove()
        displayCurrentProjectTask()
    })
    projectDelBtn.textContent = "✖"
    projectDelBtn.classList.add("project-del-btn")

    projectCard.classList.add("project-card")
    if (newProject == "Inbox") {
        projectDelBtn.remove()
    }
}

const displayCurrentProjectTask = () => {
    const tasks = document.querySelector("#tasks")
    const allChildren = tasks.children
    const currentName = app.getProjects()[app.getCurrentProject()].getName()
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i].classList.contains(currentName)) {
            allChildren[i].classList.remove("hidden")
            // allChildren[i].removeAttribute("hidden")
        } else {
            allChildren[i].classList.add("hidden")
            // allChildren[i].setAttribute("hidden", true)
            // this way of doing things is incompatible with Flexbox...
        }
    }
}

const createAddTaskButton = () => {
    const addTaskDiv = document.querySelector("#add-task-div")
    const addTaskBtn = document.createElement("button")
    const confirmBtn = document.createElement("button")
    const cancelBtn = document.createElement("button")
    const textInput = document.createElement("input")
    const inputDiv = document.createElement("div")

    addTaskDiv.appendChild(addTaskBtn)
    addTaskDiv.appendChild(inputDiv)
    
    inputDiv.appendChild(textInput)
    inputDiv.appendChild(document.createElement("br"))
    inputDiv.appendChild(confirmBtn)
    inputDiv.appendChild(cancelBtn)

    inputDiv.classList.add("hidden")
    inputDiv.classList.add("task-input-div")

    confirmBtn.textContent = "Confirm"
    confirmBtn.classList.add("confirm-btn")
    confirmBtn.addEventListener("click", () => {
        if (textInput.value == "") {
            textInput.focus()
        } else {
            if (app.getProjects()[app.getCurrentProject()].addTask(textInput.value)) {
                createTaskCard(textInput.value, app.getProjects()[app.getCurrentProject()].getName())
                textInput.value = ""
                inputDiv.classList.add("hidden")
                addTaskBtn.classList.remove("hidden")
            }
        }
    })

    cancelBtn.textContent = "Cancel"
    cancelBtn.classList.add("cancel-btn")
    cancelBtn.addEventListener("click", () => {
        textInput.value = ""
        inputDiv.classList.add("hidden")
        addTaskBtn.classList.remove("hidden")
    })

    addTaskBtn.setAttribute("id", "add-task-btn")
    addTaskBtn.textContent = "+ Task"
    addTaskBtn.addEventListener("click", () => {
        addTaskBtn.classList.add("hidden")
        inputDiv.classList.remove("hidden")
        textInput.focus()
    })
}

const createAddProjectButton = () => {
    const addProjectDiv = document.querySelector("#add-project-div")
    const addProjectBtn = document.createElement("button")
    const confirmBtn = document.createElement("button")
    const cancelBtn = document.createElement("button")
    const textInput = document.createElement("input")
    const inputDiv = document.createElement("div")

    addProjectDiv.appendChild(addProjectBtn)
    addProjectDiv.appendChild(inputDiv)

    inputDiv.appendChild(textInput)
    inputDiv.appendChild(document.createElement("br"))
    inputDiv.appendChild(confirmBtn)
    inputDiv.appendChild(cancelBtn)

    inputDiv.classList.add("hidden")
    inputDiv.setAttribute("id", "project-input-div")

    confirmBtn.textContent = "Confirm"
    confirmBtn.classList.add("confirm-btn")
    confirmBtn.addEventListener("click", () => {
        if (textInput.value == "") {
            textInput.focus()
        } else {
            if (app.addProject(textInput.value)) {
                createProjectCard(textInput.value)
                app.selectProject(textInput.value)
                displayCurrentProjectTask()
                textInput.value = ""
                inputDiv.classList.add("hidden")
                addProjectBtn.classList.remove("hidden")
            } else {
                alert("A project with that name already exists.")
            }
        }
    })

    cancelBtn.textContent = "Cancel"
    cancelBtn.classList.add("cancel-btn")
    cancelBtn.addEventListener("click", () => {
        textInput.value = ""
        inputDiv.classList.add("hidden")
        addProjectBtn.classList.remove("hidden")
    })

    addProjectBtn.setAttribute("id", "add-project-btn")
    addProjectBtn.textContent = "+ Project"
    addProjectBtn.addEventListener("click", () => {
        addProjectBtn.classList.add("hidden")
        inputDiv.classList.remove("hidden")
        textInput.focus()
    })
}

// export { todoApp }
const app = todoApp()
createAddTaskButton()
createAddProjectButton()

app.addProject("Inbox")
createProjectCard("Inbox")
// app.getProjects()[0].addTask("Live and let die")
// createTaskCard("Live and let die", app.getProjects()[app.getCurrentProject()].getName())

// app.addProject("Maïté")
// createProjectCard("Maïté")
// app.getProjects()[1].addTask("Drop Off")
// app.getProjects()[1].addTask("Pick Up")
// app.getProjects()[1].addTask("Play")
// createTaskCard("Drop Off", app.getProjects()[app.getCurrentProject()].getName())
// createTaskCard("Pick Up", app.getProjects()[app.getCurrentProject()].getName())
// createTaskCard("Play", app.getProjects()[app.getCurrentProject()].getName())

// app.addProject("Exercise")
// createProjectCard("Exercise")
// app.getProjects()[2].addTask("Jog")
// app.getProjects()[2].addTask("Stretch")
// createTaskCard("Jog", app.getProjects()[app.getCurrentProject()].getName())
// createTaskCard("Stretch", app.getProjects()[app.getCurrentProject()].getName())

// app.addProject("Reading")
// createProjectCard("Reading")
// app.getProjects()[3].addTask("LOTR")
// createTaskCard("LOTR", app.getProjects()[app.getCurrentProject()].getName())

displayCurrentProjectTask()