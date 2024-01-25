import Icon from './img/check.svg';

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

  header.textContent = 'To Do';

  body.prepend(header);
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

  addProjectBtn.textContent = '+ Project';
  addProject.addEventListener('click', () =>
    console.log('I need to be built! (probably in another module)')
  );

  addProject.appendChild(addProjectBtn);
  sidebar.appendChild(projects);
  sidebar.appendChild(addProject);
  addProject.appendChild(addProjectBtn);
  main.appendChild(sidebar);
  body.appendChild(main);
}

function buildTaskContainer() {
  const main = document.querySelector('main');
  const container = document.createElement('div');
  const tasks = document.createElement('div');
  const addTask = document.createElement('div');
  const addTaskBtn = document.createElement('button');

  container.setAttribute('id', 'container');
  tasks.setAttribute('id', 'tasks');

  addTaskBtn.textContent = '+ Task';
  addTaskBtn.addEventListener('click', () => {
    console.log('I need to be built! (probably in another module)');
  });

  addTask.appendChild(addTaskBtn);
  container.appendChild(tasks);
  container.appendChild(addTask);
  main.appendChild(container);
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
  buildTaskContainer();
  buildFooter();
}

export { buildPage };
