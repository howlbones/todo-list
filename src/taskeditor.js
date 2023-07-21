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

    let oldTitle = task.title;
    task.title = newTitle;

    // Console debug

    console.log(`Task ID - ${task.id}`);
    console.log(`Title changed from "${oldTitle}" to "${task.title}"`);
    console.log('Updated projects:');
    console.table(projects);
    console.log(`\n`);
  }


  let changeDescription = function (projectId, taskId, newDesc) {
    let task = _findTask(projectId, taskId);

    if (!task) { return };

    let oldDesc = task.description;
    task.description = newDesc;

    // Console debug

    console.log(`Task ID - ${task.id}`);
    console.log(`Description changed from "${oldDesc}" to "${task.description}"`);
    console.log('Updated projects:');
    console.table(projects);
    console.log(`\n`);
  }


  let changeDueDate = function (projectId, taskId, newDate) {
    let task = _findTask(projectId, taskId);

    if (!task) { return };

    let oldDate = task.dueDate;
    task.dueDate = newDate;

    // Console debug

    console.log(`Task ID - ${task.id}`);
    console.log(`Date changed from "${oldDate}" to "${task.dueDate}"`);
    console.log('Updated projects:');
    console.table(projects);
    console.log(`\n`);
  }


  let changePriority = function (projectId, taskId, newPriority) {
    let task = _findTask(projectId, taskId);

    if (!task) { return };

    let oldPriority= task.priority;
    task.pritority = newPriority;

    // Console debug

    console.log(`Task ID - ${task.id}`);
    console.log(`Priority changed from "${oldPriority}" to "${task.priority}"`);
    console.log('Updated projects:');
    console.table(projects);
    console.log(`\n`);
  }

  return { changeTitle, changeDescription, changeDueDate, changePriority }
}();