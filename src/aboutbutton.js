
export function activateAboutButton() {
  const button = document.querySelector('button.about');
  button.addEventListener('mouseenter', displayAbout);
  button.addEventListener('mouseleave', hideAbout);

}

function displayAbout() {
  const about = document.querySelector('.about-popup');
  about.style.display = 'flex';
}

function hideAbout() {
  const about = document.querySelector('.about-popup');
  about.style.display = 'none';
}