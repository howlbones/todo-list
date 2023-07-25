
export function activateAddProjectButton() {
  const button = document.querySelector('button.add-project');

  console.log('activating button');
  button.addEventListener('click', showAddProjectField);

}

function showAddProjectField() {
  console.log('button clicked');
  const button = document.querySelector('button.add-project');
  const container = document.createElement('div');

  const form = document.createElement('form');
  const label = document.createElement('label');
  const input = document.createElement('input');
  label.setAttribute('for', "new-project-name");
  label.textContent = "Projects name:";
  input.setAttribute('type', 'text');
  input.setAttribute('id', "new-projects-name");
  input.setAttribute('name', 'new-projects-name');
  form.appendChild(label);
  form.appendChild(input);
  
  const submitPromptButton = document.createElement('button');
  submitPromptButton.textContent = "✔";

  container.classList.add('project-add-prompt');
  container.appendChild(form);
  container.appendChild(submitPromptButton);

  button.style.marginTop = "0px";
  button.classList.add('active');
  button.parentNode.insertBefore(container, button);
  removeEventListener(button);

  button.addEventListener('click', removeAddProjectField);

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