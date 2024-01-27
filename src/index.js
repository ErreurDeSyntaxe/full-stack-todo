import './style.css';
import { buildPage } from './page';
import { todoApp } from './logic';

buildPage();
const app = todoApp();
app.newProjectInput();
app.newTaskInput();
app.readLocally();
app.addProject('Inbox');
app.selectProject('Inbox');
app.printAll();
app.storeLocally();
