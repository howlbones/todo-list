import { Task } from "./task";
import { format } from "date-fns";

export function Project() {
  let name = "";
  let tasks = [];
  let addTask = function(title, desc, dueDate, dateCreated, priority) {
    let newTask = Task();
    newTask.id = tasks.length;
    newTask.title = title;
    newTask.description = desc;
    newTask.dateCreated = format(Date.now(), 'HH:mm | dd MMMM yyyy');
    newTask.dueDate = format(dueDate, 'dd MMMM yyyy');
    newTask.priority = priority;
    tasks.push(newTask);
  }
  let deleteTask = function(id) {
    tasks.splice(id,1);
  }

  return {name, tasks, addTask, deleteTask};
}