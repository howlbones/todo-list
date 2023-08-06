import { ProjectCollection } from "./projectcollection";
import { Project } from "./project";
import { editProject } from "./projecteditor";
import { IconPack } from "./iconpack";
import { renderProjects } from "./projectrender";

export let projectManager = function() {

  function addProject(name, iconId) {
    let newProject = Project();
    const projects = ProjectCollection.projects;

    // Finding a unique id for a project
    let id = Math.floor(Math.random() * 10000);
    for (let i = 0; i < projects.length; i++) {
      while (projects[i].id == id) {
        id = Math.floor(Math.random() * 10000);
      }
    }


    newProject.id = id;
    newProject.name = name;
    newProject.icon = IconPack[iconId];
    ProjectCollection.projects.push(newProject);

    renderProjects();

    // Console debug
    // console.log('New Project added. ID - ', newProject.id);
    // console.log('Updated Project list:');
    // console.table(ProjectCollection.projects);
    // console.log('\n');
  }
  

  function deleteProject(id) {
    let projects = ProjectCollection.projects;
    
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === id) {
        projects.splice(i, 1);
      }
    }

    // Console debug
    // console.log("Project", id, "deleted");
    // console.log("Updated project list:");
    // console.table(ProjectCollection.projects);
    // console.log('\n');
  }


  function renameProject(projectId, newName) {
    editProject.changeName(projectId, newName);
  }

  return {addProject, deleteProject, renameProject}
}();