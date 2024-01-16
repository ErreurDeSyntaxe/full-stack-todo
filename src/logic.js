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
                    console.log(string + " project deleted. Selecting 'Inbox'")
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
                    console.log(">> Project " + i + " : " + projectList[i].getName() + " task: NO TASKS IN THIS PROJECT")
                }
                for (let j = 0; j < projectList[i].getTasks().length; j++) {
                    console.log(">> Project " + i + " : " + projectList[i].getName() + " task: " + j + " " + projectList[i].getTasks()[j].getName())
                }
            }
            else {
                if (projectList[i].getTasks().length == 0) {
                    console.log("Project " + i + " : " + projectList[i].getName() + " task: NO TASKS IN THIS PROJECT")
                }
                for (let j = 0; j < projectList[i].getTasks().length; j++) {
                    console.log("Project " + i + " : " + projectList[i].getName() + " task: " + j + " " + projectList[i].getTasks()[j].getName())
                }
            }
        }
    }

    const selectProject = (string) => {
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].getName() == string) {
                console.log(string + " found at index " + i)
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
        // for (let i = 0; i < taskList.length; i++) {
        //     console.log(taskList[i].getName())
        // }
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

// export { todoApp }
const app = todoApp()
app.addProject("Inbox")
app.addProject("Maïté")
app.addProject("Exercise")
app.addProject("Reading")
app.getProjects()[0].addTask("Live and let die")
app.getProjects()[1].addTask("Drop Off")
app.getProjects()[1].addTask("Pick Up")
app.getProjects()[1].addTask("Play")
app.getProjects()[2].addTask("Jog")
app.getProjects()[2].addTask("Stretch")
app.getProjects()[3].addTask("LOTR")