import { format } from "date-fns";
import { ProjectCollection } from "./projectcollection";
import { Task } from "./task";
import { editTask } from "./taskeditor";
import { displayContent } from "./displayproject";

export let taskManager = function () {

  let addTask = function (projectId, title, desc, dueDate, creationDate, priority, status) {
    let newTask = Task();
    let project;

    // Find the correct project object that the task will reside in
    for (let i = 0; i < ProjectCollection.projects.length; i++) {
      if (ProjectCollection.projects[i].id == projectId) {
        project = ProjectCollection.projects[i];
      }
    }
    if (!project) {
      console.log('Incorrect Project ID given. Need an existing ID')
      return;
    }

    // Making the new task id unique
    let id = Math.floor(Math.random() * 10000);
    for (let i = 0; i < project.tasks; i++) {
      while (project.tasks[i].id == id) {
        id = Math.floor(Math.random() * 10000);
      }
    }

    newTask.id = id;
    newTask.projectId = projectId;
    newTask.title = title;
    newTask.description = desc;
    let formated = format(new Date(creationDate), 'HH:mm | dd MMMM yyyy');
    if (formated) {
      newTask.dateCreated = formated;
    } else {
      newTask.dateCreated = creationDate;
    }
    formated = format(new Date(dueDate), 'dd MMMM yyyy');
    if (formated) {
      newTask.dueDate = formated;
    } else {
      newTask.dueDate = dueDate;
    }
    newTask.priority = priority;
    (status) ? newTask.status = status : newTask.status = 'active';
    project.tasks.push(newTask);


    localStorage.setItem(`task ${projectId} ${id}`, JSON.stringify({
      "id": id,
      "projectId": projectId,
      "title": title,
      "description": desc,
      "dateCreated": creationDate,
      "dueDate": dueDate,
      "priority": priority,
      "status": newTask.status
    }));
  }

  let deleteTask = function (projectId, taskId) {
    let projects = ProjectCollection.projects;
    let project;

    // Searching for the project by ID
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === projectId) {
        project = projects[i];
      }
    }
    if (!project) {
      console.log("Can't delete task. Project with this id not found");
      return
    }

    // Searching for the task by ID
    let found = false;
    for (let i = 0; i < project.tasks.length; i++) {
      if (project.tasks[i].id === taskId) {
        project.tasks.splice(i, 1);
        found = true;
      }
    }
    if (!found) {
      console.log('No task with this ID found.')
      return
    }

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.split(' ')[0] === 'task') {
        let value = JSON.parse(localStorage[key]);
        if (value.id == taskId && value.projectId == projectId) {
          localStorage.removeItem(key);
          break;
        }
      }
    }

    displayContent.clear();
  }


  let changeTitle = function (projectId, taskId, newTitle) {
    editTask.changeTitle(projectId, taskId, newTitle);
  }

  let changeDescription = function (projectId, taskId, newDesc) {
    editTask.changeDescription(projectId, taskId, newDesc);
  }

  let changeDate = function (projectId, taskId, newDate) {
    newDate = format(newDate, 'dd MMMM yyyy');
    editTask.changeDueDate(projectId, taskId, newDate);
  }

  let changePriority = function (projectId, taskId, newPriority) {
    editTask.changePriority(projectId, taskId, newPriority);
  }

  return { addTask, deleteTask, changeTitle, changeDate, changePriority, changeDescription };
}();