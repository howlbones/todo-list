import { ProjectCollection } from "./projectcollection";
import { viewTask } from "./viewtask";

export function activateTaskButtons() {
  const tasks = document.querySelectorAll("button.task");
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].className !== 'view-button'){
      tasks[i].addEventListener('click', crossOut);
      const viewButton = tasks[i].querySelector('.view-button');
      viewButton.addEventListener('click', viewTask);
    }

  }
  
}


function crossOut(e) {
  let target = e.target;
  if (target.tagName === 'BUTTON') {
  } else {
    target = target.closest('button');
  }
  if (target.className === 'view-button') {
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