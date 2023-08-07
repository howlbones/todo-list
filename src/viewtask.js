import { ProjectCollection } from "./projectcollection";
import { taskManager } from "./taskmanager";
import { convertDateToNumber } from "../dateconverter";
import { displayContent } from "./displayproject";


export function viewTask(e) {
  let taskId = parseInt(e.target.closest('.task').className.split(' ')[1]);
  let projectId = e.target.closest('div.display-project-container');
  projectId = parseInt(projectId.className.split(" ")[1]);
  let projects = ProjectCollection.projects;

  let project, task;
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id == projectId) {
      project = projects[i];
      for (let j = 0; j < project.tasks.length; j++) {
        if (project.tasks[j].id == taskId) {
          task = project.tasks[j];
        }
      }
    }
  }


  const body = document.querySelector('body');
  const darkScreen = document.createElement('div');
  darkScreen.classList.add('dark-screen');
  const form = document.createElement('form');
  form.classList.add('task-form');

  const dateCreated = document.createElement('p');
  dateCreated.textContent = `Date created: ${task.dateCreated}`;
  dateCreated.classList.add('date-created');

  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'tasktitle');
  titleLabel.textContent = 'Title';
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'tasktitle');
  titleInput.setAttribute('name', 'tasktitle');
  titleInput.value = task.title;

  const descriptionLabel = document.createElement('label');
  descriptionLabel.setAttribute('for', 'taskdesc');
  descriptionLabel.textContent = 'Description';
  const descriptionInput = document.createElement('textarea');
  descriptionInput.setAttribute('cols', '40');
  descriptionInput.setAttribute('rows', '3');
  descriptionInput.setAttribute('name', 'taskdesc');
  descriptionInput.textContent = task.description;

  const dateLabel = document.createElement('label');
  dateLabel.setAttribute('for', 'taskdate');
  dateLabel.textContent = 'Due date';
  const dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('id', 'taskdate');
  dateInput.setAttribute('name', 'taskdate');
  dateInput.value = convertDateToNumber(task.dueDate);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('priority-button-container');
  const lowPriorityButton = document.createElement('button');
  lowPriorityButton.classList.add('priority-button');
  lowPriorityButton.classList.add('low');
  lowPriorityButton.textContent = 'low';
  lowPriorityButton.setAttribute('type', 'button');
  const mediumPriorityButton = document.createElement('button');
  mediumPriorityButton.classList.add('priority-button');
  mediumPriorityButton.classList.add('medium');
  mediumPriorityButton.textContent = 'medium';
  mediumPriorityButton.setAttribute('type', 'button');
  const highPriorityButton = document.createElement('button');
  highPriorityButton.classList.add('priority-button');
  highPriorityButton.classList.add('high');
  highPriorityButton.textContent = 'high';
  highPriorityButton.setAttribute('type', 'button');

  if (task.priority === 'low') {
    lowPriorityButton.classList.add('selected');
  } else if (task.priority === 'medium') {
    mediumPriorityButton.classList.add('selected');
  } else if (task.priority === 'high') {
    highPriorityButton.classList.add('selected');
  }

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Update task';
  submitButton.classList.add('task-form-submit');
  submitButton.setAttribute('type', 'button');

  const exitButton = document.createElement('button');
  exitButton.textContent = 'Cancel';
  exitButton.classList.add('cancel-button');
  exitButton.setAttribute('type', 'button');


  form.appendChild(dateCreated);
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  buttonContainer.appendChild(lowPriorityButton);
  buttonContainer.appendChild(mediumPriorityButton);
  buttonContainer.appendChild(highPriorityButton);
  form.appendChild(buttonContainer);
  form.appendChild(submitButton);
  form.appendChild(exitButton);
  darkScreen.appendChild(form);
  body.appendChild(darkScreen);

  lowPriorityButton.addEventListener('click', () => {
    lowPriorityButton.classList.add('selected');
    mediumPriorityButton.classList.remove('selected');
    highPriorityButton.classList.remove('selected');
  })

  mediumPriorityButton.addEventListener('click', () => {
    mediumPriorityButton.classList.add('selected');
    lowPriorityButton.classList.remove('selected');
    highPriorityButton.classList.remove('selected');
  })

  highPriorityButton.addEventListener('click', () => {
    highPriorityButton.classList.add('selected');
    lowPriorityButton.classList.remove('selected');
    mediumPriorityButton.classList.remove('selected');
  })


  exitButton.addEventListener('click', () => {
    darkScreen.remove();
  })

  submitButton.addEventListener('click', () => {
    if (titleInput.value != "" && dateInput.value != "") {
      let priority = document.querySelector('.priority-button.selected');
      priority = priority.className.split(' ')[1];
      taskManager.changeTitle(projectId, taskId, titleInput.value);
      taskManager.changeDescription(projectId, taskId, descriptionInput.value);
      taskManager.changeDate(projectId, taskId, dateInput.valueAsDate);
      taskManager.changePriority(projectId, taskId, priority);

      darkScreen.remove();
      // let currentContent = document.querySelector('.display-project-container');
      // currentContent.remove();

      let selectedButton = document.querySelector('.side-bar button.active');
      selectedButton = selectedButton.className.split(' ')[0];

      if (selectedButton === 'today') {
        displayContent.today();
      } else if (selectedButton === 'all-tasks') {
        displayContent.all();
      } else if (selectedButton === 'important') {
        displayContent.important();
      } else {
        displayContent.project(projectId);
      }

    } else {
      if (titleInput.value === "") {
        titleInput.classList.add('invalid');
      }
      if (dateInput.value === "") {
        dateInput.classList.add("invalid");
      }
    }
  })


}