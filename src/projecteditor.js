import { ProjectCollection } from "./projectcollection";

export let editProject = function () {
  let projects = ProjectCollection.projects;

  let changeName = function (projectId, newName) {

    let project;
    let oldName;

    // Search for the needed project by ID
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === projectId) {
        project = projects[i];
        oldName = project.name;
        project.name = newName;
      }
    }
    if (!project) {
      return
    }

  }

  return { changeName }
}();