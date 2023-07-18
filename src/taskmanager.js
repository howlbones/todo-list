import { format } from "date-fns";
import { ProjectCollection } from "./projectcollection";
import { Task } from "./task";

export let manageTask = function() {

  let addTask = function(projectId, title, desc, dueDate, priority) {
    let newTask = Task();
    let project = ProjectCollection.projects[projectId];
    newTask.id = project.tasks.length;
    newTask.title = title;
    newTask.description = desc;
    newTask.dateCreated = format(Date.now(), 'HH:mm | dd MMMM yyyy');
    newTask.dueDate = format(dueDate, 'dd MMMM yyyy');
    newTask.priority = priority;
    ProjectCollection.projects[projectId].tasks.push(newTask);
  }
  let deleteTask = function(projectId, taskId) {
    ProjectCollection.projects[projectId].tasks.split(taskId, 1);
  }

  return {addTask, deleteTask};
}();