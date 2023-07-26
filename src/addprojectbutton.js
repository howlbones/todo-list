import { IconPack } from "./iconpack";
import { projectManager } from "./projectmanager";
import { activateProjectButtons, removeProjectButtonListeners } from "./projectbuttons";

export function activateAddProjectButton() {
  const button = document.querySelector('button.add-project');
  
  button.addEventListener('click', showAddProjectField);
}

function showAddProjectField() {
  const button = document.querySelector('button.add-project');
  const container = document.createElement('div');

  const form = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');
  label.setAttribute('for', "projectname");
  label.textContent = "Projects name:";
  input.setAttribute('type', 'text');
  input.setAttribute('id', "projectname");
  input.setAttribute('name', 'new-projects-name');
  form.appendChild(label);
  form.appendChild(input);
  
  const iconContainer = document.createElement('div');
  iconContainer.classList.add('icon-container');
  iconContainer.classList.add('0');

  for (let i = 0; i < IconPack.length; i++) {
    const iconButton = document.createElement('button');
    const icon = document.createElement('img');
    icon.src = IconPack[i];
    iconButton.appendChild(icon);
    iconContainer.appendChild(iconButton);
    iconButton.addEventListener('click', () => {
      const allIconButtons = document.querySelectorAll('.project-add-prompt .icon-container button');
      allIconButtons.forEach((button) => { button.classList.remove('active') });
      iconButton.classList.add('active');
      iconContainer.className = "";
      iconContainer.classList.add('icon-container');
      iconContainer.classList.add(`${i}`);
    })
  }
  
  const submitPromptButton = document.createElement('button');
  submitPromptButton.textContent = "✔";

  container.classList.add('project-add-prompt');
  container.appendChild(form);
  container.appendChild(submitPromptButton);
  container.appendChild(iconContainer);

  button.style.marginTop = "0px";
  button.classList.add('active');
  button.parentNode.insertBefore(container, button);
  removeEventListener(button);
  
  button.addEventListener('click', removeAddProjectField);
  
  activateSubmitPromptButton(submitPromptButton);
  
  window.scrollBy(0, 500);
}

function activateSubmitPromptButton(submitPromptButton) {
  submitPromptButton.addEventListener('click', submitForm);
}

function submitForm() {
  const input = document.querySelector('.project-add-prompt input');
  let name = input.value
  let icon = document.querySelector('.project-add-prompt .icon-container').className;
  
  if (name != "" && icon) {
    icon = icon.split(' ')[1];
    projectManager.addProject(name, icon);
    removeAddProjectField();
    removeProjectButtonListeners();
    activateProjectButtons();
  }
}

function removeEventListener(button) {
  button.removeEventListener('click', showAddProjectField);
  button.removeEventListener('click', removeAddProjectField);
}

function removeAddProjectField() {
  const prompt = document.querySelector('div.project-add-prompt');
  const button = document.querySelector('button.add-project');

  button.classList.remove('active');
  button.style.marginTop = 'auto';
  prompt.remove();

  removeEventListener(button);
  button.addEventListener('click', showAddProjectField);
}