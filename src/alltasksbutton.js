import { displayContent } from "./displayproject";


export function activateAllTaskButton() {
  const button = document.querySelector('button.all-tasks');
  button.addEventListener('click', displayAll);

}


function displayAll(e) {
  const sidebarButtons = document.querySelectorAll('.side-bar button');
  for (let i = 0; i < sidebarButtons.length; i++ ) {
    sidebarButtons[i].classList.remove('active');
  }

  let target = e.target;
  if (target.tagName !== 'BUTTON') {
  }

  target.classList.add('active');

  displayContent.all();
}