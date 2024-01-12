import _ from 'lodash';

const buildHeader = () => {
    const body = document.querySelector("body");
    const header = document.createElement("header");

    header.textContent = "To Do List";

    body.appendChild(header);
};

const buildSidebar = () => {
    const body = document.querySelector("body");
    // EXCLUDES THE HEADER AND THE FOOTER
    const pageDiv = document.createElement("div");
    pageDiv.setAttribute("id", "page-content");

    // SIDEBAR
    const sideDiv = document.createElement("div");
    sideDiv.setAttribute("id", "sidebar");
    
    // SIDEBAR: CATEGORIES
    const categoriesDiv = document.createElement("div");
    const inboxDiv = document.createElement("div");
    const inboxBtn = document.createElement("button");
    const todayDiv = document.createElement("div");
    const todayBtn = document.createElement("button");
    const weekDiv = document.createElement("div");
    const weekBtn = document.createElement("button");
    const historyDiv = document.createElement("div");
    const historyBtn = document.createElement("button");

    inboxBtn.classList.add("list-btn");
    todayBtn.classList.add("list-btn");
    weekBtn.classList.add("list-btn");
    historyBtn.classList.add("list-btn");

    inboxBtn.textContent = "Inbox";
    todayBtn.textContent = "Today";
    weekBtn.textContent = "This Week";
    historyBtn.textContent = "History";

    inboxBtn.addEventListener("click", () => {
        console.log("inbox");
    });
    todayBtn.addEventListener("click", () => {
        console.log("today");
    });
    weekBtn.addEventListener("click", () => {
        console.log("this week");
    });
    historyBtn.addEventListener("click", () => {
        console.log("history");
    });

    inboxDiv.appendChild(inboxBtn);
    todayDiv.appendChild(todayBtn);
    weekDiv.appendChild(weekBtn);
    historyDiv.appendChild(historyBtn);

    categoriesDiv.appendChild(inboxDiv);
    categoriesDiv.appendChild(todayDiv);
    categoriesDiv.appendChild(weekDiv);
    categoriesDiv.appendChild(historyDiv);
    sideDiv.appendChild(categoriesDiv);

    // SIDEBAR: PROJECTS
    const projectDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const titleHeader = document.createElement("h2");
    const addProjectDiv = document.createElement("div");
    const addProjectBtn = document.createElement("button");

    projectDiv.setAttribute("id", "projects");
    addProjectBtn.setAttribute("id", "add-project-btn");
    addProjectBtn.classList.add("list-btn");

    titleHeader.textContent = "Projects";
    addProjectBtn.textContent = "+ Project";

    addProjectBtn.addEventListener("click", () => {
        console.log("+ Project");
    });

    titleDiv.appendChild(titleHeader);
    projectDiv.appendChild(titleDiv);
    addProjectDiv.appendChild(addProjectBtn);
    projectDiv.appendChild(addProjectDiv);
    sideDiv.appendChild(projectDiv);

    // SIDEBAR COMPLETE
    pageDiv.appendChild(sideDiv);
    body.appendChild(pageDiv);
};

const buildMain = () => {
    // CURRENT PROJECT DISPLAY
    const pageDiv = document.querySelector("#page-content");
    const main = document.createElement("main");
    const mainTopDiv = document.createElement("div");
    const currentProjectDiv = document.createElement("div");
    const currentProjectTitle = document.createElement("h1");
    const buttonDiv = document.createElement("div");
    const clearBtn = document.createElement("button");

    mainTopDiv.setAttribute("id", "main-top");
    currentProjectDiv.setAttribute("id", "project-name");
    clearBtn.setAttribute("id", "clear-btn");

    currentProjectTitle.textContent = "Inbox";
    clearBtn.textContent = "Clear Completed";

    clearBtn.addEventListener("click", () => {
        console.log("clear completed");
    });

    buttonDiv.appendChild(clearBtn);
    currentProjectDiv.appendChild(currentProjectTitle);
    mainTopDiv.appendChild(currentProjectDiv);
    mainTopDiv.appendChild(buttonDiv);
    main.appendChild(mainTopDiv);
    pageDiv.appendChild(main);

    // ADD TASK BUTTON
    const addTaskDiv = document.createElement("div");
    const addTaskBtn = document.createElement("button");

    addTaskDiv.setAttribute("id", "add-task");
    addTaskBtn.setAttribute("id", "add-task-btn");

    addTaskBtn.textContent = "+ Task";

    addTaskBtn.addEventListener("click", () => {
        console.log("+ Task");
        // currentProjectDiv.appendChild(createTaskCard())
    });

    addTaskDiv.appendChild(addTaskBtn);
    main.appendChild(addTaskDiv);
};

const buildPage = (() => {
    buildHeader();
    buildSidebar();
    buildMain();
})();