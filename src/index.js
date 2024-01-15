import _ from 'lodash';
import { todoApp } from './logic';
import { buildHeader } from './page';
import { buildSidebar } from './page';
import { buildMain } from './page';

const buildPage = (() => {
    buildHeader();
    buildSidebar();
    buildMain();
})();

let app = todoApp();