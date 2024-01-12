function createProject(name) {
    return { name }
}

function createTask(title) {
    return {
        title,
        dueDate: new Date(),
    }
}

function createTaskCard(title) {
    //set the default value of a date input to today using this line
    //dateInput.valueAsDate = new Date()
}