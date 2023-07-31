import { ProjectCollection } from "./projectcollection";
import { viewTask } from "./viewtask";
import { taskManager } from "./taskmanager";
import { displayContent } from "./displayproject";


export function activateTaskButtons() {
  const tasks = document.querySelectorAll("button.task");
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].className !== 'view-button' || tasks[i].className !== 'delete-task') {
      tasks[i].addEventListener('click', crossOut);
      const viewButton = tasks[i].querySelector('.view-button');
      viewButton.addEventListener('click', viewTask);
      const deleteButton = tasks[i].querySelector('.delete-task');
      deleteButton.addEventListener('click', deleteTask);
    }

  }

}

function deleteTask(e) {
  let target = e.target;
  let taskId = target.closest('.task').className.split(' ')[1];
  let projectId = target.closest('.display-project-container').className.split(' ')[1];

  taskManager.deleteTask(parseInt(projectId), parseInt(taskId));

  let displayType = document.querySelector('.workspace');
  displayType = displayType.className.split(' ')[1];

  if (!displayType) {
    displayContent.project(projectId);
  } else if (displayType === 'today') {
    displayContent.today();
  }

}


function crossOut(e) {
  let target = e.target;
  if (target.tagName === 'BUTTON') {
  } else {
    target = target.closest('button');
  }
  if (target.className === 'view-button' || target.className === 'delete-task') {
    return;
  }

  let projectId = target.closest('div.display-project-container');
  projectId = projectId.className.split(" ")[1];
  let taskId = target.className.split(" ")[1];


  if (!target.className.split(" ")[2]) {
    target.classList.add('done');
    ProjectCollection.projects[projectId].tasks[taskId].status = "done";
  } else {
    target.classList.remove('done');
    ProjectCollection.projects[projectId].tasks[taskId].status = "active";
  }


}