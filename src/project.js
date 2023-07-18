import { manageTask } from "./taskmanager";
import { ProjectCollection } from "./projectcollection";

export function Project() {
  let id = "";
  let name = "";
  let tasks = [];
  let addTask = function(title, desc, dueDate, priority) {
    manageTask.addTask(title, desc, dueDate, priority);
  }
  let deleteTask = function(id) {
    manageTask.deleteTask(id);
  }

  return {name, tasks, addTask, deleteTask};
}