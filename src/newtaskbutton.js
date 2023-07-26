import { taskForm } from "./newtaskform";


export function activateNewTaskButton (button) {
 console.log('button activated');
 button.addEventListener('click', taskForm.show);
}



