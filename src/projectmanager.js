import { ProjectCollection } from "./projectcollection";
import { Project } from "./project";

export let manageProject = function() {

  function addProject(name) {
    let newProject = Project();
    newProject.id = ProjectCollection.projects.length;
    newProject.name = name;
    ProjectCollection.projects.push(newProject);
  }
  function deleteProject(id) {
    ProjectCollection.projects.split(id, 1);
  }
  return {addProject, deleteProject}
}();