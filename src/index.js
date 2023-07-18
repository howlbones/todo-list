import { ProjectCollection } from "./projectcollection";
import { manageProject } from "./projectmanager";
import { manageTask } from "./taskmanager";

manageProject.addProject('My First Project');
manageProject.addProject('Work Project');
console.log('Current Projects:')
console.log(ProjectCollection.projects);

manageTask.addTask(0, 'Run', 'Go for a 5 mile run', new Date(2023, 10, 23), 'high');

console.group('Projects after adding a task');
console.log(ProjectCollection.projects);


