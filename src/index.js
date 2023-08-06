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
import { storageAvailable } from "./localStorageValidation";


// Main app function exports API functions to the window, so
// API can be accessed in the browser
window.app = function () {

  if (localStorage.length === 0) {
    projectManager.addProject('Personal', 9, 1);
    projectManager.addProject('Fitness', 3, 2);
    projectManager.addProject('Shopping', 1, 3);
    projectManager.addProject('Meeting', 2, 4);
    let projects = ProjectCollection.projects;

    taskManager.addTask(
      1,
      "Plan a camping trip",
      "Write down what we will need for the trip to the Whiterun trail",
      new Date(2023, 9, 12),
      Date.now(),
      "medium",
      'active'
    )

  }


  activateAboutButton();
  activateAddProjectButton();
  activateProjectButtons();
  activateTodayButton();
  activateAllTaskButton();
  activateImportantButton();

  return { projectManager, taskManager, ProjectCollection };
}();

