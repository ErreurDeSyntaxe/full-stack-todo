import './style.css';
import { buildPage } from './page';
import { todoApp } from './logic';

buildPage();
const app = todoApp();
app.readLocally();
app.addProject('Inbox');
app.addProject('Exercise');
app.addTask('Jog 20 minutes');
app.addProject('Work');
app.addProject('Reading');
app.selectProject('Inbox');
app.addTask('LOTR');
app.selectProject('Reading');
app.addTask('LOTR');
app.printAll();
app.storeLocally();
