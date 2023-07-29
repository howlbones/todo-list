import { displayContent } from "./displayproject";

export function activateProjectButtons() {
  const buttons = document.querySelectorAll("button.project");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', requestProject);
  }
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

  const buttons = document.querySelectorAll("button.project");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  target.classList.add('active');

  let id = target.className.split(' ')[1];

  displayContent.project(parseInt(id));
}