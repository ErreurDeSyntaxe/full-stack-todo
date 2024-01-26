function todoApp() {
  const projectList = [];
  const taskList = [];
  let currentProject = 0;

  const printAll = () => {
    console.log('\n******Project List:******');
    for (let i = 0; i < projectList.length; i++) {
      if (currentProject === i) {
        console.log(projectList[i].getName() + ' <<<<<<');
      } else {
        console.log(projectList[i].getName());
      }
    }
    console.log('\n++++++++Task List:++++++++');
    for (const task of taskList) {
      console.log(task.getParent() + ': ' + task.getName());
    }
  };

  const addProject = (newProject) => {
    for (const project of projectList) {
      if (project.getName() === newProject) {
        // console.log(`A project called ${newProject} already exists.`);
        return;
      }
    }

    projectList.push(Project(newProject));
    displayProjects(getProjects());
    // console.log(`New project '${newProject}' added.`);
    // The newly created project becomes the focus
    currentProject = projectList.length - 1;
  };

  const removeProject = (unwantedProject) => {
    if (unwantedProject === 'Inbox') {
      return;
    }

    for (let i = 0; i < projectList.length; i++) {
      if (projectList[i].getName() === unwantedProject) {
        projectList.splice(i, 1);
        displayProjects(getProjects());
        // Back to Inbox project
        currentProject = 0;
        return;
      }
    }
  };

  const selectProject = (wanted) => {
    /*
     * I chose a for loop rather than an Array method because the
     * currentProject variable is an index of the projectList array
     */
    for (let i = 0; i < projectList.length; i++) {
      if (wanted === projectList[i].getName()) {
        currentProject = i;
        // console.log(`Project '${wanted}' selected.`);
        displayTasks();
      }
    }
  };

  const getProjects = () => projectList;

  const getCurrentProject = () => currentProject;

  const addTask = (newTask) => {
    // Check if task already exists
    for (const task of taskList) {
      if (
        task.getParent() === getProjects()[getCurrentProject()].getName() &&
        task.getName() === newTask
      ) {
        // Refuse to add task because it exists
        // console.log(
        //   `A task called ${newTask} in project ${getProjects()[
        //     getCurrentProject()
        //   ].getName()} already exists.`
        // );
        return;
      }
    }

    // Add task to task list
    taskList.push(Task(newTask, getProjects()[getCurrentProject()].getName()));
    // console.log(
    //   `New task '${newTask}' in project '${getProjects()[
    //     getCurrentProject()
    //   ].getName()}' added.`
    // );
  };

  const removeTask = (unwantedTask) => {
    /*
     * I chose to use a for loop instead of an Array method because
     * the splice method is so useful and requires the array index
     */
    for (let i = 0; i < taskList.length; i++) {
      if (
        taskList[i].getName() === unwantedTask &&
        taskList[i].getParent() === getProjects()[getCurrentProject()].getName()
      ) {
        taskList.splice(i, 1);
        return;
      }
    }
  };

  const getTasks = () => taskList;

  const storeLocally = () => {
    // Store the projects
    const projectNames = projectList.map((project) => {
      return project.getName();
    });
    localStorage.setItem('localProjects', JSON.stringify(projectNames));

    // Store the tasks
    const taskNames = taskList.map((task) => {
      const parentName = task.getParent();
      const taskName = task.getName();
      const fullName = `${parentName}#$%${taskName}`;
      return fullName;
    });
    localStorage.setItem('localTasks', JSON.stringify(taskNames));
  };

  const readLocally = () => {
    // Retrieve the projects from storage
    const localProjects = JSON.parse(localStorage.getItem('localProjects'));
    // console.log(localProjects);

    // There's nothing in storage. Abort.
    if (!localProjects) return;

    localProjects.forEach((project) => {
      // Add each name found in storage as a project
      addProject(project);
    });

    // Retrieve the tasks from storage
    const localTasks = JSON.parse(localStorage.getItem('localTasks'));
    // console.log(localTasks);

    // There's nothing in storage. Abort.
    if (!localTasks) return;

    localTasks.forEach((item) => {
      const projectTask = item.split('#$%');
      // Select the project first
      selectProject(projectTask[0]);
      // Then add the task to the project
      addTask(projectTask[1]);
    });
  };

  const displayTasks = (taskArray) => {
    // TODO: display tasks from the current project only
    const tasksDiv = document.getElementById('tasks');
    const currentProjectName = projectList[getCurrentProject()].getName();

    // Remove all tasks from the container, add current project tasks
    while (tasksDiv.firstChild) {
      tasksDiv.removeChild(tasksDiv.lastChild);
    }

    // Add relevant tasks to the container
    for (const task of taskList) {
      if (task.getParent() === currentProjectName) {
        const taskCard = document.createElement('div');
        const taskCheck = document.createElement('div');
        const taskCheckInput = document.createElement('input');
        const taskName = document.createElement('div');
        const taskDate = document.createElement('div');
        const taskDateInput = document.createElement('input');
        const taskDelete = document.createElement('div');
        const taskDeleteBtn = document.createElement('button');

        taskCard.classList.add('taskCard');
        taskCheckInput.setAttribute('type', 'checkbox');
        taskName.textContent = task.getName();
        taskDateInput.setAttribute('type', 'date');
        taskDateInput.valueAsDate = task.getDate();
        taskDeleteBtn.textContent = '✖';

        taskCheck.appendChild(taskCheckInput);
        taskDate.appendChild(taskDateInput);
        taskDelete.appendChild(taskDeleteBtn);
        taskCard.appendChild(taskCheck);
        taskCard.appendChild(taskName);
        taskCard.appendChild(taskDate);
        taskCard.appendChild(taskDate);
        taskCard.appendChild(taskDelete);
        tasksDiv.appendChild(taskCard);
      }
    }
  };

  const displayProjects = (projectArray) => {
    const projectsDiv = document.getElementById('projects');

    // Remove all projects from the sidebar, re-add them later
    while (projectsDiv.firstChild) {
      projectsDiv.removeChild(projectsDiv.lastChild);
    }

    // FIXME: This can't be the best way to accomplish the goal
    projectArray.forEach((element) => {
      const project = document.createElement('div');
      const selectMe = document.createElement('button');
      const deleteMe = document.createElement('button');
      const elementName = element.getName();

      selectMe.textContent = elementName;
      deleteMe.textContent = '✖';

      selectMe.addEventListener('click', () => {
        selectProject(elementName);
      });

      deleteMe.addEventListener('click', () => {
        removeProject(elementName);
      });

      project.appendChild(selectMe);
      if (elementName !== 'Inbox') project.appendChild(deleteMe);
      projectsDiv.appendChild(project);
    });

    // Add a black line between the projects and the 'add project' button
    const line = document.createElement('hr');
    line.style.borderColor = 'black';
    line.style.marginTop = '10px';
    line.style.marginBottom = '10px';
    projectsDiv.appendChild(line);
  };

  return {
    printAll,
    addProject,
    removeProject,
    getCurrentProject,
    getProjects,
    selectProject,
    addTask,
    removeTask,
    storeLocally,
    readLocally,
  };
}

function Project(string) {
  // const id = 1;
  let name = string;

  const getName = () => {
    return name;
  };

  const setName = (newName) => {
    name = newName;
  };

  return { getName, setName };
}

function Task(taskName, projectName) {
  // const id = 1;
  let parentProject = projectName;
  let name = taskName;
  let dueDate = new Date();

  const getDate = () => {
    return dueDate;
  };

  const setDate = (newDate) => {
    dueDate = newDate;
  };

  const getName = () => {
    return name;
  };

  const getParent = () => {
    return parentProject;
  };

  const setName = (newName) => {
    name = newName;
  };

  return { getDate, setDate, getName, getParent, setName };
}

export { todoApp };
