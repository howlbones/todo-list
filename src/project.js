import { taskManager } from "./taskmanager";

export function Project() {
  let id = "";
  let name = "";
  let tasks = [];
  let icon;
  let addTask = function(title, desc, dueDate, priority) {
    taskManager.addTask(title, desc, dueDate, priority);
  }
  let deleteTask = function(id) {
    taskManager.deleteTask(id);
  }
  return {name, tasks, icon, addTask, deleteTask};
}