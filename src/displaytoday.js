import { displayContent } from "./displayproject";

export function displayToday(e) {
  const sidebarButtons = document.querySelectorAll('.side-bar button');
  for (let i = 0; i < sidebarButtons.length; i++ ) {
    sidebarButtons[i].classList.remove('active');
  }

  let target = e.target;
  if (target.tagName !== 'BUTTON') {
    target = target.closest('button');
  }

  target.classList.add('active');

  displayContent.today();

  
}