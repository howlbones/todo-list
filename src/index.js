import { Task } from "./task";
import { Project } from "./project";

let newProject = Project();
newProject.name = "My first project";
newProject.addTask('Jog', 'do some running', Date.now(), 'low');
newProject.addTask('eat', 'eating', Date.now(), 'high');
console.log(newProject.tasks);