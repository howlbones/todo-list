import { displayContent } from "./displayproject";
import { projectManager } from "./projectmanager";
import { renderProjects } from "./projectrender";

export function activateProjectButtons() {
  const buttons = document.querySelectorAll("button.project");
  const deleteButtons = document.querySelectorAll('button.delete-project-button');
  // console.log(deleteButtons);
  // console.log('yes');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', requestProject);
  }

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteProject);
  }
}

function deleteProject(e) {
  e.stopPropagation();
  let id = e.target.closest('button.project');
  id = id.className.split(' ')[1];
  projectManager.deleteProject(parseInt(id));
  removeProjectButtonListeners();
  renderProjects();
  activateProjectButtons();
}

export function removeProjectButtonListeners() {
  const buttons = document.querySelectorAll("button.project");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].removeEventListener('click', requestProject);
  }
}

function requestProject(e) {
  let target = e.target;
  if (target.tagName === 'BUTTON') {
  } else {
    target = target.closest('button');
  }

  const buttons = document.querySelectorAll(".side-bar button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  target.classList.add('active');

  let id = target.className.split(' ')[1];

  displayContent.project(parseInt(id));
}