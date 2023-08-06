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
import { activateAboutButton } from "./aboutbutton";


// Main app function exports API functions to the window, so
// API can be accessed in the browser
window.app = function() {

  projectManager.addProject('My First Project', 1);
  projectManager.addProject('My Second Project', 2);
  projectManager.addProject('My Third Project', 1);
  projectManager.addProject('My Fourth Project', 3);

  activateAboutButton();
  activateAddProjectButton();
  activateProjectButtons();
  activateTodayButton();
  activateAllTaskButton();
  activateImportantButton();

  return {projectManager, taskManager, ProjectCollection};
}();

