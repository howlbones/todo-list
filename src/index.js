import { ProjectCollection } from "./projectcollection";
import { projectManager } from "./projectmanager";
import { taskManager } from "./taskmanager";

// Main app function exports API functions to the window, so
// API can be accessed in the browser
window.app = function() {

  projectManager.addProject('My First Project');
  projectManager.addProject('My Second Project');
  projectManager.addProject('My Third Project');
  projectManager.addProject('My Fourth Project');

  taskManager.addTask(0, 'Run', 'Go for a 5 mile run', new Date(2023, 10, 23), 'high');
  taskManager.addTask(0, 'Feed my dog', 'Donst forget to feed Mason', new Date(2023, 8, 1), 'medium');
  taskManager.addTask(1, 'Go out with Amy', 'Good luck', new Date(2023, 7, 21), 'high');
  
  // taskManager.deleteTask(0,0);


  return {projectManager, taskManager, ProjectCollection};
}();

