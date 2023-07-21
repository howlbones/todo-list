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
      console.log('Project with this id isn\'t found');
      console.log('\n');
      return
    }

    // Console debug
    console.log(`Changed projects name "${oldName}" to "${project.name}"`);
    console.log('\n');

  }

  return { changeName }
}();