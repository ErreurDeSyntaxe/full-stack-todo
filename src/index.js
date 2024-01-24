import './style.css';
import { buildPage } from './page';

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
        console.log('A project with that name already exists.');
        return;
      }
    }
    projectList.push(Project(newProject));
    currentProject = projectList.length - 1;
    // The newly created project becomes the focus
  };

  const removeProject = (unwantedProject) => {
    if (unwantedProject === 'Inbox') {
      return;
    }
    for (let i = 0; i < projectList.length; i++) {
      if (projectList[i].getName() === unwantedProject) {
        projectList.splice(i, 1);
        currentProject = 0; // Back to Inbox project
        return;
      }
    }
  };

  const selectProject = (wanted) => {
    for (let i = 0; i < projectList.length; i++) {
      if (wanted === projectList[i].getName()) {
        currentProject = i;
        printAll();
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
        console.log('A task with that name already exists.');
        return;
      }
    }
    taskList.push(Task(newTask, getProjects()[getCurrentProject()].getName()));
    console.log(`\n${newTask} was added`);
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

  return {
    printAll,
    addProject,
    removeProject,
    getCurrentProject,
    getProjects,
    selectProject,
    addTask,
    removeTask,
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

buildPage();
const app = todoApp();
app.addProject('Inbox');
app.addProject('Exercise');
app.addProject('Work');
app.addProject('Reading');
app.selectProject('Inbox');
app.addTask('LOTR');
app.selectProject('Reading');
app.addTask('LOTR');
app.selectProject('Exercise');
app.removeTask('LOTR');
app.selectProject('Reading');
app.removeTask('LOTR');
app.printAll();