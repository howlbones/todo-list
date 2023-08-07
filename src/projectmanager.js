import { ProjectCollection } from "./projectcollection";
import { Project } from "./project";
import { editProject } from "./projecteditor";
import { IconPack } from "./iconpack";
import { renderProjects } from "./projectrender";

export let projectManager = function () {

  function addProject(name, iconId, id) {
    let newProject = Project();
    const projects = ProjectCollection.projects;

    // Finding a unique id for a project
    if (!id) {
      id = Math.floor(Math.random() * 10000);
      for (let i = 0; i < projects.length; i++) {
        while (projects[i].id == id) {
          id = Math.floor(Math.random() * 10000);
        }
      }
    }

    newProject.id = id;
    newProject.name = name;
    newProject.icon = IconPack[iconId];
    ProjectCollection.projects.push(newProject);

    localStorage.setItem(`project ${id}`, JSON.stringify({
      "id": id,
      "name": name,
      "icon": iconId
    }));


    renderProjects();
  }


  function deleteProject(id) {
    let projects = ProjectCollection.projects;

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === id) {
        projects.splice(i, 1);
      }
    }

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = JSON.parse(localStorage[key]);
      if (key.split(' ')[0] === 'project') {
        if (value.id == id) {
          localStorage.removeItem(key);
          i--;
        }
      } else {
        if (value.projectId == id) {
          localStorage.removeItem(key);
          i--;
        }
      }
    }
  }


  function renameProject(projectId, newName) {
    editProject.changeName(projectId, newName);
  }

  return { addProject, deleteProject, renameProject }
}();