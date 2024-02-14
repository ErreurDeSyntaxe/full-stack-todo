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
    if (newProject === '') return;

    // Check if the project already exists
    for (const project of projectList) {
      if (project.getName() === newProject) {
        console.log(`A project called '${newProject}' already exists.`);
        return;
      }
    }

    projectList.push(Project(newProject));
    displayProjects();
    // The newly created project becomes the focus
    currentProject = projectList.length - 1;
    storeLocally();
  };

  const removeProject = (unwantedProject) => {
    if (unwantedProject === 'Inbox') {
      return;
    }

    for (let i = 0; i < projectList.length; i++) {
      if (projectList[i].getName() === unwantedProject) {
        projectList.splice(i, 1);

        // Remove the tasks associated with the unwanted project
        for (let j = taskList.length - 1; j >= 0; j--) {
          if (taskList[j].getParent() === unwantedProject) {
            taskList.splice(j, 1);
          }
        }

        // Back to Inbox project
        selectProject('Inbox');
        displayProjects();
        printAll();
        storeLocally();
        return;
      }
    }
  };

  const selectProject = (wanted) => {
    for (let i = 0; i < projectList.length; i++) {
      if (wanted === projectList[i].getName()) {
        currentProject = i;
        displayTasks();
      }
    }

    const parentProject = document.getElementById('parentProject');
    parentProject.textContent = wanted;
  };

  const getProjects = () => projectList;

  const getCurrentProject = () => currentProject;

  const addTask = (newTask) => {
    if (newTask === '') return;

    // Check if task already exists
    if (taskList.length !== 0) {
      for (const task of taskList) {
        if (
          task.getParent() === getProjects()[getCurrentProject()].getName() &&
          task.getName() === newTask
        ) {
          // Refuse to add task because it exists
          console.log(
            `A task called '${newTask}' in project '${getProjects()[
              getCurrentProject()
            ].getName()}' already exists.`
          );
          return;
        }
      }
    }

    // Add task to task list
    taskList.push(Task(newTask, getProjects()[getCurrentProject()].getName()));
    storeLocally();
    displayTasks();
  };

  const removeTask = (unwantedTask) => {
    // Check if the task belongs to the right project
    // because two projects could have a task with the same name
    for (let i = 0; i < taskList.length; i++) {
      if (
        taskList[i].getName() === unwantedTask &&
        taskList[i].getParent() === getProjects()[getCurrentProject()].getName()
      ) {
        taskList.splice(i, 1);
        displayTasks();
        printAll();
        return;
      }
    }
  };

  const storeLocally = () => {
    // Store the projects
    const projectNames = projectList.map((project) => {
      return project.getName();
    });
    localStorage.setItem('localProjects', JSON.stringify(projectNames));

    // Store the tasks
    if (taskList.length === 0) return;
    const taskNames = taskList.map((task) => {
      const parentName = task.getParent();
      const taskName = task.getName();
      const taskDate = task.getDate();
      const fullName = `${parentName}#$%${taskName}#$%${taskDate}`;
      return fullName;
    });

    console.table(taskNames);
    localStorage.setItem('localTasks', JSON.stringify(taskNames));
  };

  const readLocally = () => {
    // Retrieve the projects from storage
    const localProjects = JSON.parse(localStorage.getItem('localProjects'));

    // If there's something in storage
    if (localProjects) {
      if (localProjects.length > 0) {
        localProjects.forEach((project) => {
          // Add each name found in storage as a project
          addProject(project);
        });
      }
    }

    // Retrieve the tasks from storage
    const localTasks = JSON.parse(localStorage.getItem('localTasks'));

    // If there's something in storage
    if (localTasks) {
      if (localTasks.length > 0) {
        localTasks.forEach((item) => {
          const projectTaskDate = item.split('#$%');
          // Select the project first
          selectProject(projectTaskDate[0]);
          // Then add the task to the project
          addTask(projectTaskDate[1]);
          const originalDate = new Date(projectTaskDate[2]);
          taskList[taskList.length - 1].setDate(originalDate);
        });
      }
    }
  };

  const displayTasks = () => {
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

        taskDeleteBtn.addEventListener('click', () => {
          removeTask(task.getName());
        });

        taskDateInput.addEventListener('change', () => {
          const newDate = new Date(taskDateInput.valueAsDate);
          task.setDate(newDate);
          storeLocally();
        })

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

  const displayProjects = () => {
    const projectsDiv = document.getElementById('projects');

    // Remove all projects from the sidebar, re-add them later
    while (projectsDiv.firstChild) {
      projectsDiv.removeChild(projectsDiv.lastChild);
    }

    // FIXME: This can't be the best way to accomplish the goal
    projectList.forEach((element) => {
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

  const newProjectInput = () => {
    const addProjectBtn = document.getElementById('addProjectBtn');
    const hiddenDiv = document.getElementById('hiddenProject');
    const projectConfirm = document.getElementById('projectConfirm');
    const projectCancel = document.getElementById('projectCancel');
    const projectInput = document.getElementById('projectInput');

    projectConfirm.addEventListener('click', () => {
      if (projectInput.value !== '') {
        addProject(projectInput.value);
        selectProject(projectInput.value);
        projectInput.value = '';
        hiddenDiv.setAttribute('hidden', true);
        addProjectBtn.removeAttribute('hidden');
      } else {
        projectInput.focus();
      }
    });

    projectCancel.addEventListener('click', () => {
      projectInput.value = '';
      hiddenDiv.setAttribute('hidden', true);
      addProjectBtn.removeAttribute('hidden');
    });
  };

  const newTaskInput = () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const hiddenDiv = document.getElementById('hiddenTask');
    const taskConfirm = document.getElementById('taskConfirm');
    const taskCancel = document.getElementById('taskCancel');
    const taskInput = document.getElementById('taskInput');

    taskConfirm.addEventListener('click', () => {
      if (taskInput.value !== '') {
        addTask(taskInput.value);
        taskInput.value = '';
        hiddenDiv.setAttribute('hidden', true);
        addTaskBtn.removeAttribute('hidden');
      } else {
        taskInput.focus();
      }
    });

    taskCancel.addEventListener('click', () => {
      taskInput.value = '';
      hiddenDiv.setAttribute('hidden', true);
      addTaskBtn.removeAttribute('hidden');
    });
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
    newProjectInput,
    newTaskInput,
  };
}

function Project(string) {
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
