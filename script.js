(() => {
  const intro = document.getElementById('intro');
  const store = document.getElementById('store');
  const startButton = document.getElementById('startButton');
  const backButtons = [document.getElementById('backButton'), document.getElementById('footerBack')];
  const search = document.getElementById('gameSearch');
  const filterButtons = [...document.querySelectorAll('.filter-button')];
  const cards = [...document.querySelectorAll('.game-card')];
  const count = document.getElementById('gameCount');
  const empty = document.getElementById('emptyState');
  const dialog = document.getElementById('gameDialog');
  const toast = document.getElementById('toast');
  let activeFilter = 'Todos';
  let toastTimer;

  function enterStore() {
    intro.hidden = true;
    store.hidden = false;
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.classList.add('in-store');
  }
  function returnToRoom() {
    store.hidden = true;
    intro.hidden = false;
    document.body.classList.remove('in-store');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  startButton.addEventListener('click', enterStore);
  backButtons.forEach(button => button.addEventListener('click', returnToRoom));

  function filterGames() {
    const term = (search.value || '').trim().toLocaleLowerCase('pt-BR');
    let visible = 0;
    cards.forEach(card => {
      const matchesPlatform = activeFilter === 'Todos' || card.dataset.platform === activeFilter;
      const haystack = `${card.dataset.title} ${card.dataset.platform} ${card.dataset.genre}`.toLocaleLowerCase('pt-BR');
      const matchesSearch = !term || haystack.includes(term);
      const show = matchesPlatform && matchesSearch;
      card.hidden = !show;
      if (show) visible++;
    });
    count.textContent = `${visible} ${visible === 1 ? 'JOGO' : 'JOGOS'}`;
    empty.hidden = visible !== 0;
  }
  search.addEventListener('input', filterGames);
  filterButtons.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    filterGames();
  }));

  function notify(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  function showGame(name) {
    const card = cards.find(item => item.dataset.title === name);
    if (!card) return;
    document.getElementById('dialogTitle').textContent = name;
    document.getElementById('dialogPlatform').textContent = card.dataset.platform.toUpperCase();
    document.getElementById('dialogDescription').textContent = card.querySelector('.game-details p').textContent;
    document.getElementById('dialogPrice').textContent = card.querySelector('.price-row strong').textContent;
    dialog.showModal();
  }
  document.querySelectorAll('[data-game]').forEach(button => button.addEventListener('click', () => showGame(button.dataset.game)));
  document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  document.getElementById('dialogAction').addEventListener('click', () => {
    dialog.close();
    notify('Este é um anúncio demonstrativo. Os links reais serão adicionados quando o acervo for cadastrado.');
  });
})();
