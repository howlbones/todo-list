import { Project } from "./project";

let newProject = Project();
newProject.name = "My first project";
newProject.addTask('Jog', 'do some running', Date.now(), 'low');
newProject.addTask('eat', 'eating', new Date(2023, 10, 23, 12), 'high');
console.log(newProject.tasks);