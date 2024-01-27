import Icon from './img/check.svg';
import IconBlack from './img/check-black.svg';
import Menu from './img/menu.svg';

function changeFavicon() {
  const head = document.querySelector('head');
  const linkEl = document.createElement('link');
  linkEl.rel = 'icon';
  linkEl.href = Icon;
  head.appendChild(linkEl);
}

function buildHeader() {
  const body = document.querySelector('body');
  const header = document.createElement('header');
  const headerLeft = document.createElement('div');
  const headerText = document.createElement('div');
  const headerRight = document.createElement('div');
  const headerIcon = new Image();
  const menuIcon = new Image();

  menuIcon.setAttribute('id', 'menu');
  menuIcon.src = Menu;
  menuIcon.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('invisible');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 700) {
      sidebar.classList.add('invisible');
    } else {
      sidebar.classList.remove('invisible');
    }
  });

  headerIcon.src = IconBlack;
  headerText.textContent = 'To Do';

  headerLeft.appendChild(headerIcon);
  headerLeft.appendChild(headerText);
  headerRight.appendChild(menuIcon);
  header.appendChild(headerLeft);
  header.appendChild(headerRight);

  body.appendChild(header);
}

function buildSidebar() {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  const sidebar = document.createElement('div');
  const projects = document.createElement('div');
  const addProject = document.createElement('div');
  const addProjectBtn = document.createElement('button');

  sidebar.setAttribute('id', 'sidebar');
  projects.setAttribute('id', 'projects');

  addProject.setAttribute('id', 'addProjectBtnContainer');

  addProjectBtn.textContent = '+Project';
  addProjectBtn.setAttribute('id', 'addProjectBtn');
  addProjectBtn.classList.add('adderBtn');
  addProjectBtn.addEventListener('click', () => {
    const hiddenDiv = document.getElementById('hiddenProject');
    const projectInput = document.getElementById('projectInput');
    addProjectBtn.setAttribute('hidden', true);
    hiddenDiv.removeAttribute('hidden');
    projectInput.focus();
  });

  addProject.appendChild(addProjectBtn);
  sidebar.appendChild(projects);
  sidebar.appendChild(addProject);
  addProject.appendChild(addProjectBtn);
  main.appendChild(sidebar);
  body.appendChild(main);
}

function buildSidebarInput() {
  const newProjectDiv = document.getElementById('addProjectBtnContainer');
  const hiddenDiv = document.createElement('div');
  const inputDiv = document.createElement('div');
  const inputText = document.createElement('input');
  const btnDiv = document.createElement('div');
  const confirmBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  hiddenDiv.setAttribute('hidden', true);
  hiddenDiv.setAttribute('id', 'hiddenProject');

  inputText.setAttribute('type', 'text');
  inputText.setAttribute('placeholder', 'Project Name');
  inputText.classList.add('textInput');
  inputText.setAttribute('id', 'projectInput');

  confirmBtn.textContent = 'Confirm';
  confirmBtn.setAttribute('id', 'projectConfirm');
  confirmBtn.classList.add('confirmBtn');

  cancelBtn.textContent = 'Cancel';
  cancelBtn.setAttribute('id', 'projectCancel');
  cancelBtn.classList.add('cancelBtn');

  btnDiv.appendChild(confirmBtn);
  btnDiv.appendChild(cancelBtn);
  inputDiv.appendChild(inputText);
  inputDiv.appendChild(btnDiv);
  hiddenDiv.appendChild(inputDiv);
  hiddenDiv.appendChild(btnDiv);
  newProjectDiv.appendChild(hiddenDiv);
}

function buildTaskContainer() {
  const main = document.querySelector('main');
  const container = document.createElement('div');
  const parentProject = document.createElement('div');
  const tasks = document.createElement('div');
  const addTask = document.createElement('div');
  const addTaskBtn = document.createElement('button');

  parentProject.setAttribute('id', 'parentProject');
  container.setAttribute('id', 'container');
  tasks.setAttribute('id', 'tasks');

  addTask.setAttribute('id', 'addTaskBtnContainer');

  addTaskBtn.textContent = '+Task';
  addTaskBtn.setAttribute('id', 'addTaskBtn');
  addTaskBtn.classList.add('adderBtn');
  addTaskBtn.addEventListener('click', () => {
    const hiddenDiv = document.getElementById('hiddenTask');
    const taskInput = document.getElementById('taskInput');
    addTaskBtn.setAttribute('hidden', true);
    hiddenDiv.removeAttribute('hidden');
    taskInput.focus();
  });

  addTask.appendChild(addTaskBtn);
  container.appendChild(parentProject);
  container.appendChild(tasks);
  container.appendChild(addTask);
  main.appendChild(container);
}

function buildTaskContainerInput() {
  const newTaskDiv = document.getElementById('addTaskBtnContainer');
  const hiddenDiv = document.createElement('div');
  const inputDiv = document.createElement('div');
  const inputText = document.createElement('input');
  const btnDiv = document.createElement('div');
  const confirmBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  hiddenDiv.setAttribute('hidden', true);
  hiddenDiv.setAttribute('id', 'hiddenTask');

  inputText.setAttribute('type', 'text');
  inputText.setAttribute('placeholder', 'Task Name');
  inputText.classList.add('textInput');
  inputText.setAttribute('id', 'taskInput');

  confirmBtn.textContent = 'Confirm';
  confirmBtn.setAttribute('id', 'taskConfirm');
  confirmBtn.classList.add('confirmBtn');

  cancelBtn.textContent = 'Cancel';
  cancelBtn.setAttribute('id', 'taskCancel');
  cancelBtn.classList.add('cancelBtn');

  btnDiv.appendChild(confirmBtn);
  btnDiv.appendChild(cancelBtn);
  inputDiv.appendChild(inputText);
  inputDiv.appendChild(btnDiv);
  hiddenDiv.appendChild(inputDiv);
  hiddenDiv.appendChild(btnDiv);
  newTaskDiv.appendChild(hiddenDiv);
}

function buildFooter() {
  const body = document.querySelector('body');
  const footer = document.createElement('footer');

  footer.innerHTML = `By <a href="https://github.com/erreurDeSyntaxe/">ErreurDeSyntaxe</a> for
      <a href="https://www.theodinproject.com/">The Odin Project</a>`;

  body.appendChild(footer);
}

function buildPage() {
  changeFavicon();
  buildHeader();
  buildSidebar();
  buildSidebarInput();
  buildTaskContainer();
  buildTaskContainerInput();
  buildFooter();
}

export { buildPage };
