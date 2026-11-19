const startButton = document.querySelector('#startButton');
const backButton = document.querySelector('#backButton');
const footerBack = document.querySelector('#footerBack');
const intro = document.querySelector('.intro');
const catalog = document.querySelector('#catalog');
const searchInput = document.querySelector('#gameSearch');
const filterButtons = [...document.querySelectorAll('.filter-button')];
const gameCards = [...document.querySelectorAll('.game-card')];
const gameCount = document.querySelector('#gameCount');
const emptyState = document.querySelector('#emptyState');
const toast = document.querySelector('#toast');
let activeFilter = 'Todos';
let toastTimer;

function enterCatalog() {
  document.body.classList.add('changing-channel');
  window.setTimeout(() => {
    intro.hidden = true;
    catalog.hidden = false;
    document.body.classList.remove('changing-channel');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 260);
}
function returnToTV() {
  catalog.hidden = true;
  intro.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function filterGames() {
  const term = searchInput.value.trim().toLocaleLowerCase('pt-BR');
  let visible = 0;
  gameCards.forEach(card => {
    const matchesPlatform = activeFilter === 'Todos' || card.dataset.platform === activeFilter;
    const matchesText = card.dataset.title.toLocaleLowerCase('pt-BR').includes(term);
    const show = matchesPlatform && matchesText;
    card.hidden = !show;
    if (show) visible++;
  });
  gameCount.textContent = `${visible} ${visible === 1 ? 'ITEM' : 'ITENS'} NO ACERVO`;
  emptyState.hidden = visible !== 0;
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 3000);
}

startButton.addEventListener('click', enterCatalog);
backButton.addEventListener('click', returnToTV);
footerBack.addEventListener('click', returnToTV);
searchInput.addEventListener('input', filterGames);
filterButtons.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle('active', item === button));
  filterGames();
}));
document.querySelectorAll('.ad-button').forEach(button => button.addEventListener('click', () => {
  showToast(`${button.dataset.game}: anúncio demonstrativo. Os links reais serão cadastrados depois!`);
}));
