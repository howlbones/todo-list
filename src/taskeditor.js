import { ProjectCollection } from "./projectcollection";

export let editTask = function () {

  let projects = ProjectCollection.projects;

  let _findTask = function (projectId, taskId) {
    let project;

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === projectId) {
        project = projects[i];
        break;
      }
    }
    if (!project) {
      console.log('Project with given ID not found');
    }

    let found = false;
    for (let i = 0; i < project.tasks.length; i++) {
      if (project.tasks[i].id === taskId) {
        found = true;
        return project.tasks[i];
      }
    }
    if (!found) {
      console.group('Task with this ID not found');
      return null;
    }
  }


  let changeTitle = function (projectId, taskId, newTitle) {
    let task = _findTask(projectId, taskId);

    if (!task) { return };

    task.title = newTitle;
  }


  let changeDescription = function (projectId, taskId, newDesc) {
    let task = _findTask(projectId, taskId);

    if (!task) { return };

    task.description = newDesc;
  }


  let changeDueDate = function (projectId, taskId, newDate) {
    let task = _findTask(projectId, taskId);

    if (!task) { return };

    task.dueDate = newDate;
  }


  let changePriority = function (projectId, taskId, newPriority) {
    let task = _findTask(projectId, taskId);

    if (!task) { return };

    task.priority = newPriority;
  }

  return { changeTitle, changeDescription, changeDueDate, changePriority }
}();