const startButton = document.querySelector('#startButton');
const backButton = document.querySelector('#backButton');
const intro = document.querySelector('.intro');
const catalog = document.querySelector('#catalog');

startButton.addEventListener('click', () => {
  // Simula a troca de canal da TV antes de mostrar o catálogo.
  document.body.classList.add('changing-channel');
  window.setTimeout(() => {
    intro.hidden = true;
    catalog.hidden = false;
    catalog.scrollIntoView({ behavior: 'smooth' });
    document.body.classList.remove('changing-channel');
  }, 220);
});

backButton.addEventListener('click', () => {
  catalog.hidden = true;
  intro.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
