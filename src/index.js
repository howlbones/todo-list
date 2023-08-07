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
import { displayContent } from "./displayproject";


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
      "low",
      'active'
    )
    taskManager.addTask(
      1,
      "Finish to-do list",
      "Develop and publish todo-list app",
      Date.now(),
      Date.now(),
      "high",
      'done'
    )
    taskManager.addTask(
      1,
      "Call Soul about the money",
      "Ask for advice",
      new Date(2023, 8, 20),
      Date.now(),
      "medium",
      'active'
    )
    taskManager.addTask(
      1,
      "Bake a cake",
      "For the newly moved in neighbours",
      Date.now(),
      Date.now(),
      "medium",
      'active'
    )
    taskManager.addTask(
      2,
      "Go for a run",
      "",
      Date.now(),
      Date.now(),
      "low",
      'done'
    )
    taskManager.addTask(
      2,
      "Compare local gym prices",
      "The is one in the southside tunnel underground",
      new Date(2023, 8, 19),
      Date.now(),
      "low",
      'active'
    )
    taskManager.addTask(
      2,
      "Compare local gym prices",
      "The is one in the southside tunnel underground",
      new Date(2023, 8, 19),
      Date.now(),
      "low",
      'active'
    )
    taskManager.addTask(
      3,
      "Art supplies",
      "Watercolor and paper",
      new Date(2023, 9, 5),
      Date.now(),
      "low",
      'active'
    )
    taskManager.addTask(
      3,
      "Doe",
      "For the bread",
      Date.now(),
      Date.now(),
      "medium",
      'done'
    )
    taskManager.addTask(
      3,
      "Ryan Gosling teacup",
      "Look for a couple",
      new Date(2023, 9, 1),
      Date.now(),
      "low",
      'active'
    )
    taskManager.addTask(
      4,
      "Dentist appointment 7:30 pm",
      "With Dr. Brooks",
      Date.now(),
      Date.now(),
      "high",
      'active'
    )
    taskManager.addTask(
      3,
      "Meet up with Tony",
      "I don't know why agreed to",
      new Date(2023, 8, 10),
      Date.now(),
      "low",
      'active'
    )

    document.querySelector('button.all-tasks').classList.add('active');
    displayContent.all();
  }


  activateAboutButton();
  activateAddProjectButton();
  activateProjectButtons();
  activateTodayButton();
  activateAllTaskButton();
  activateImportantButton();

  return { projectManager, taskManager, ProjectCollection };
}();

