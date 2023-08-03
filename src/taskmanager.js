import { format } from "date-fns";
import { ProjectCollection } from "./projectcollection";
import { Task } from "./task";
import { editTask } from "./taskeditor";
import { displayContent } from "./displayproject";

export let taskManager = function () {

  let addTask = function (projectId, title, desc, dueDate, priority) {
    let newTask = Task();
    let project;

    // Find the correct project object that the task will reside in
    for (let i = 0; i < ProjectCollection.projects.length; i++) {
      if (ProjectCollection.projects[i].id == projectId) {
        project = ProjectCollection.projects[projectId];
      }
    }
    if (!project) {
      console.log('Incorrect Project ID given. Need an existing ID')
      return;
    }

    // Making the new task id unique
    if (project.tasks.length === 0) {
      newTask.id = 0;
    }
    else {
      let lastID = Number(project.tasks[project.tasks.length - 1].id);
      newTask.id = lastID + 1;
    }

    newTask.title = title;
    newTask.description = desc;
    newTask.dateCreated = format(Date.now(), 'HH:mm | dd MMMM yyyy');
    newTask.dueDate = format(dueDate, 'dd MMMM yyyy');
    newTask.priority = priority;
    newTask.status = 'active';
    ProjectCollection.projects[projectId].tasks.push(newTask);

    // Console debug
    // console.log(`New task added to ${project.name}`);
    // console.log(`New task ID - ${newTask.id}`);
    // console.log(`${project.name} updated task list:`)
    // console.table(project.tasks);
    // console.log('\n');
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

    displayContent.clear();

    // Console debug
    // console.log(`Task deleted from ${project.name}. ID - ${taskId}`);
    // console.log(`Updated task list:`)
    // console.table(project.tasks);
    // console.log('\n');
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

  return { addTask, deleteTask, changeTitle, changeDate, changePriority, changeDescription};
}();