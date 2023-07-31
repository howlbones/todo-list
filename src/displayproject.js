import { Project } from "./project";
import { ProjectCollection } from "./projectcollection";
import PlusIcon from "../src/img/plus-gray.png";
import ViewIcon from "../src/img/view.png";
import CircleIcon from "../src/img/check-circle.png";
import { activateNewTaskButton } from "./newtaskbutton";
import { activateTaskButtons } from "./taskbuttons";

export let displayContent = function () {

  let project = function (projectId) {
    if (document.querySelector('.display-project-container')) {
      clear();
    }

    const workspace = document.querySelector('div.workspace');
    workspace.className = "";
    workspace.classList.add('workspace');
    const displayContainer = document.createElement('div');
    displayContainer.classList.add('display-project-container');
    displayContainer.classList.add(`${projectId}`);

    const projects = ProjectCollection.projects;
    const project = projects[projectId];
    const projectName = project.name;

    const header = document.createElement('h1');
    header.classList.add('project-name');
    header.textContent = projectName;

    displayContainer.appendChild(header);

    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');

    let tasks = project.tasks;

    if (tasks) {
      for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        const button = document.createElement('button');
        button.classList.add('task');
        button.classList.add(`${task.id}`);
        if (task.status === 'done') {
          button.classList.add('done');
        }
        const title = document.createElement('p');
        title.classList.add('task-title')
        title.textContent = task.title;
        const priority = document.createElement('p');
        priority.classList.add('task-priority');
        priority.classList.add(`${task.priority}`);
        priority.textContent = task.priority;
        const date = document.createElement('p');
        date.classList.add('task-date');
        date.textContent = task.dueDate;
        const view = document.createElement('button');
        view.classList.add('view-button');
        const viewImg = document.createElement('img');
        viewImg.src = ViewIcon;
        view.append(viewImg);
        const circleIcon = document.createElement('img');
        circleIcon.classList.add('circle-icon');
        circleIcon.src = CircleIcon;
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-task');
        deleteButton.textContent = "✕";

        button.appendChild(circleIcon);
        button.appendChild(title);
        button.appendChild(priority);
        button.appendChild(date);
        button.appendChild(view);
        button.appendChild(deleteButton);

        tasksContainer.appendChild(button);
      }
    }

    const addTaskButton = document.createElement('button');
    addTaskButton.classList.add('add-task-button');
    const addTaskIcon = document.createElement('img');
    addTaskIcon.src = PlusIcon;
    const buttonText = document.createElement('p');
    buttonText.textContent = "New task";

    addTaskButton.appendChild(addTaskIcon);
    addTaskButton.appendChild(buttonText);
    tasksContainer.appendChild(addTaskButton);

    activateNewTaskButton(addTaskButton);


    displayContainer.appendChild(tasksContainer);
    workspace.appendChild(displayContainer);

    activateTaskButtons();
  }

  let today = function () {
    if (document.querySelector('.display-project-container')) {
      clear();
    }

    const projects = ProjectCollection.projects;
    const workspace = document.querySelector('div.workspace');
    workspace.classList.add('today');

    const leftSide = document.createElement('div');
    leftSide.classList.add('left-side');
    const rightSide = document.createElement('div');
    rightSide.classList.add('right-side');

    for (let i = 0; i < projects.length; i++) {

      let projectId = projects[i].id;

      const displayContainer = document.createElement('div');
      displayContainer.classList.add('display-project-container');
      displayContainer.classList.add(`${projectId}`);

      const project = projects[projectId];
      const projectName = project.name;

      const header = document.createElement('h1');
      header.classList.add('project-name');
      header.textContent = projectName;

      displayContainer.appendChild(header);

      const tasksContainer = document.createElement('div');
      tasksContainer.classList.add('tasks-container');

      let tasks = project.tasks;


      if (tasks) {
        for (let i = 0; i < tasks.length; i++) {
          let task = tasks[i];
          const button = document.createElement('button');
          button.classList.add('task');
          button.classList.add(`${task.id}`);
          if (task.status === 'done') {
            button.classList.add('done');
          }
          const title = document.createElement('p');
          title.classList.add('task-title')
          title.textContent = task.title;
          const priority = document.createElement('p');
          priority.classList.add('task-priority');
          priority.classList.add(`${task.priority}`);
          priority.textContent = task.priority;
          const date = document.createElement('p');
          date.classList.add('task-date');
          date.textContent = task.dueDate;
          const view = document.createElement('button');
          view.classList.add('view-button');
          const viewImg = document.createElement('img');
          viewImg.src = ViewIcon;
          view.append(viewImg);
          const circleIcon = document.createElement('img');
          circleIcon.classList.add('circle-icon');
          circleIcon.src = CircleIcon;
          const deleteButton = document.createElement('button');
          deleteButton.classList.add('delete-task');
          deleteButton.textContent = "✕";

          button.appendChild(circleIcon);
          button.appendChild(title);
          button.appendChild(priority);
          button.appendChild(date);
          button.appendChild(view);
          button.appendChild(deleteButton);

          tasksContainer.appendChild(button);
        }
      }

      const addTaskButton = document.createElement('button');
      addTaskButton.classList.add('add-task-button');
      const addTaskIcon = document.createElement('img');
      addTaskIcon.src = PlusIcon;
      const buttonText = document.createElement('p');
      buttonText.textContent = "New task";

      addTaskButton.appendChild(addTaskIcon);
      addTaskButton.appendChild(buttonText);
      tasksContainer.appendChild(addTaskButton);

      activateNewTaskButton(addTaskButton);


      displayContainer.appendChild(tasksContainer);

      if (i == 0 || i % 2 === 0) {
        leftSide.appendChild(displayContainer);
      } else {
        rightSide.appendChild(displayContainer);
      }


    }

    console.log('activating task buttons');

    workspace.appendChild(leftSide);
    workspace.appendChild(rightSide);
    activateTaskButtons();
  }

  let clear = function () {
    const content = document.querySelector('.display-project-container');
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');
    if (content) { content.remove() };
    if (leftSide) { leftSide.remove() };
    if (rightSide) { rightSide.remove() };
  }

  return { project, clear, today }
}();