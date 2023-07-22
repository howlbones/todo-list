export let dom = function() {
  const projectContainer = document.querySelector('.projects-container');
  const projects = document.querySelectorAll('.project');

  return {
    projectContainer,
    projects
  }
}();