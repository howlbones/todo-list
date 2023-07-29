import { taskForm } from "./newtaskform";


export function activateNewTaskButton (button) {
 button.addEventListener('click', taskForm.show);
}



