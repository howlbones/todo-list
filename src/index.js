import { ProjectCollection } from "./projectcollection";
import { projectManager } from "./projectmanager";
import { taskManager } from "./taskmanager";
import { renderProjects } from "./projectrender";
import "./main.css";
import { activateAddProjectButton } from "./addprojectbutton";
import { activateProjectButtons } from "./projectbuttons";
import { activateTodayButton } from "./todaybutton";
import { activateAllTaskButton } from "./alltasksbutton";
import { activateImportantButton } from "./importantbutton";


// Main app function exports API functions to the window, so
// API can be accessed in the browser
window.app = function() {

  projectManager.addProject('My First Project', 1);
  projectManager.addProject('My Second Project', 2);
  projectManager.addProject('My Third Project', 1);
  projectManager.addProject('My Fourth Project', 3);

  taskManager.addTask(0, 'Run', 'Go for a 5 mile run', new Date(2023, 10, 23), 'high');
  taskManager.addTask(0, 'Feed my dog', 'Donst forget to feed Mason', new Date(2023, 8, 1), 'medium');
  taskManager.addTask(1, 'Go out with Lena', 'Good luck', new Date(2023, 7, 21), 'high');

  activateAddProjectButton();
  activateProjectButtons();
  activateTodayButton();
  activateAllTaskButton();
  activateImportantButton();

  return {projectManager, taskManager, ProjectCollection};
}();

