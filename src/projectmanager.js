import { ProjectCollection } from "./projectcollection";
import { Project } from "./project";
import { editProject } from "./projecteditor";

export let projectManager = function() {

  function addProject(name) {
    let newProject = Project();
    const projects = ProjectCollection.projects;

    // Finding a unique index for a project
    if (projects.length === 0) {
      newProject.id = 0;
    }
    else {
      let lastID = Number(projects[projects.length - 1].id);
      newProject.id = lastID + 1;
    }

    newProject.name = name;
    ProjectCollection.projects.push(newProject);

    // Console debug
    console.log('New Project added. ID - ', newProject.id);
    console.log('Updated Project list:');
    console.table(ProjectCollection.projects);
    console.log('\n');
  }
  

  function deleteProject(id) {
    let projects = ProjectCollection.projects;
    
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === id) {
        projects.splice(i, 1);
      }
    }

    // Console debug
    console.log("Project", id, "deleted");
    console.log("Updated project list:");
    console.table(ProjectCollection.projects);
    console.log('\n');
  }


  function renameProject(projectId, newName) {
    editProject.changeName(projectId, newName);
  }

  return {addProject, deleteProject, renameProject}
}();