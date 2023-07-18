import { Task } from "./task";

export function Project() {
  let name = "";
  let tasks = [];
  let addTask = function(title, desc, dueDate, priority) {
    let newTask = Task();
    newTask.title = title;
    newTask.description = desc;
    newTask.dueDate = dueDate;
    newTask.priority = priority;
    tasks.push(newTask);
  }

  return {name, addTask, tasks};
}