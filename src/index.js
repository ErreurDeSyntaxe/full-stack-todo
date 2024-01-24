import './style.css';
import Icon from './img/check.svg';

function todoApp() {
  const projectList = [];
  const taskList = [];
  let currentProject = 0;

  const printAll = () => {};

  const addProject = (string) => {};

  const removeProject = (id) => {};

  const selectProject = (id) => {};

  const getProjects = () => projectList;

  const addTask = (string) => {};

  const removeTask = (id) => {};

  const getTasks = () => taskList;
}

function Project() {
  const id = 1;
  let name;

  const getName = () => {};

  const setName = () => {};
}

function Task() {
  const id = 1;
  let projectName;
  let name;

  const getName = () => {};

  const setName = () => {};
}

console.log('There is not much in this file.');
const head = document.querySelector('head');
const linkEl = document.createElement('link');
linkEl.rel = 'icon';
linkEl.href = Icon;
head.appendChild(linkEl);
// const checkIcon = new Image();
// checkIcon.src = Icon;
// head.appendChild(checkIcon);
