import Inbox from './img/inbox.svg';

function displayProjects(projectArray) {
  const projectsDiv = document.querySelector('#projects');

  // Remove all projects from the sidebar, re-add them later
  while (projectsDiv.firstChild) {
    projectsDiv.removeChild(projectsDiv.lastChild);
  }

  // FIXME: This can't be the best way to accomplish the goal
  projectArray.forEach((element) => {
    const project = document.createElement('div');
    const selectMe = document.createElement('button');
    const deleteMe = document.createElement('button');

    selectMe.textContent = element.getName();
    deleteMe.textContent = '✖';

    // TODO: add event listener to the buttons so they do something

    project.appendChild(selectMe);
    project.appendChild(deleteMe);
    projectsDiv.appendChild(project);

    console.log(`I was called for project '${selectMe.textContent}'`);
  });

  const line = document.createElement('hr');
  line.style.borderColor = 'black';
  projectsDiv.appendChild(line);
}

export { displayProjects };
