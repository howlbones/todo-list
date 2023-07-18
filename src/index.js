import { ProjectCollection } from "./projectcollection";
import { projectManager } from "./projectmanager";
import { taskManager } from "./taskmanager";

window.app = function() {
  projectManager.addProject('My First Project');
  projectManager.addProject('Work Project');
  console.log('Current Projects:')
  console.log(ProjectCollection.projects);

  taskManager.addTask(0, 'Run', 'Go for a 5 mile run', new Date(2023, 10, 23), 'high');
  taskManager.addTask(0, 'Feed my dog', 'Donst forget to feed Mason', new Date(2023, 8, 1), 'medium');
  taskManager.addTask(1, 'Go out with Amy', 'Good luck', new Date(2023, 7, 21), 'high');

  console.group('Projects after adding a task');
  console.log(ProjectCollection.projects);

  return {projectManager, taskManager, ProjectCollection};
}();


