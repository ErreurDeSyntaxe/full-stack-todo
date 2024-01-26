import { displayProjects } from "./display";

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
        console.log(`A project called ${newProject} already exists.`);
        return;
      }
    }
    projectList.push(Project(newProject));
    displayProjects(getProjects());
    console.log(`New project '${newProject}' added.`);
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
    for (let i = 0; i < projectList.length; i++) {
      if (wanted === projectList[i].getName()) {
        currentProject = i;
        console.log(`Project '${wanted}' selected.`);
      }
    }
  };

  const getProjects = () => projectList;

  const getCurrentProject = () => currentProject;

  const addTask = (newTask) => {
    for (const task of taskList) {
      if (
        task.getParent() === getProjects()[getCurrentProject()].getName() &&
        task.getName() === newTask
      ) {
        console.log(
          `A task called ${newTask} in project ${getProjects()[
            getCurrentProject()
          ].getName()} already exists.`
        );
        return;
      }
    }
    taskList.push(Task(newTask, getProjects()[getCurrentProject()].getName()));
    console.log(
      `New task '${newTask}' in project '${getProjects()[
        getCurrentProject()
      ].getName()}' added.`
    );
  };

  const removeTask = (unwantedTask) => {
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
    console.log(localProjects);

    // There's nothing in storage. Abort.
    if (!localProjects) return;

    localProjects.forEach((project) => {
      // Add each name found in storage as a project
      addProject(project);
    });

    // Retrieve the tasks from storage
    const localTasks = JSON.parse(localStorage.getItem('localTasks'));
    console.log(localTasks);

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

  const getName = () => {
    return name;
  };

  const getParent = () => {
    return parentProject;
  };

  const setName = (newName) => {
    name = newName;
  };

  return { getName, getParent, setName };
}

export { todoApp };
