
export function activateAboutButton() {
  const button = document.querySelector('button.about');
  const container = document.querySelector('.about-popup-container');
  button.addEventListener('mouseenter', displayAbout);
  container.addEventListener('mouseleave', hideAbout);

}

function displayAbout() {
  const about = document.querySelector('.about-popup');
  const button = document.querySelector('button.about');
  button.classList.add('active');
  about.style.display = 'flex';
}

function hideAbout() {
  const about = document.querySelector('.about-popup');
  const button = document.querySelector('button.about');
  button.classList.remove('active');
  about.style.display = 'none';
}