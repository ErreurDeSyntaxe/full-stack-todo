function todoApp() {
    const projectList = []

    const addProject = (title) => {
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].getName() == title) {
                return false
            }
        }
        projectList.push(Project(title))
        return true
    }

    const deleteProject = (string) => {
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].getName() == string && string != "Inbox") {
                projectList.splice(i, 1)
                break
            }
        }
    }

    const getProjects = () => projectList

    const selectProject = (string) => {
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].getName() == string) {
                return projectList[i]
            }
        }
    }

    return { addProject, deleteProject, getProjects, selectProject }
}

function Project(string) {
    const taskList = []
    let title = string
    
    const addTask = (string) => {
        taskList.push(Task(string))
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

export { todoApp }