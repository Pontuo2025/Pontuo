const mediaQuery = window.matchMedia('(min-width: 700px)');
let carouselInitialized = false;

mediaQuery.addEventListener('change', handleBreakpoint);
handleBreakpoint(mediaQuery);

function handleBreakpoint(e) {
  if (e.matches) {
    if (!carouselInitialized) {
      initCarousel();
      carouselInitialized = true;
    }
  } else {
    destroyCarousel();
    carouselInitialized = false;
  }
}

function initCarousel() {
  const track = document.querySelector('.points-list');
  const cards = document.querySelectorAll('.point-card');
  const btnNext = document.querySelector('.carousel-arrow');

  if (!track || !btnNext || cards.length < 2) return;

  track.dataset.index = '0';
  track.dataset.animating = 'false';

  const clone1 = cards[0].cloneNode(true);
  const clone2 = cards[1].cloneNode(true);

  clone1.classList.add('clone');
  clone2.classList.add('clone');

  track.appendChild(clone1);
  track.appendChild(clone2);

  btnNext.onclick = () => {
    if (track.dataset.animating === 'true') return;

    track.dataset.animating = 'true';
    let index = Number(track.dataset.index) + 1;
    track.dataset.index = index;

    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(-${index * 50}%)`;

    if (index === cards.length) {
      setTimeout(() => {
        track.style.transition = 'none';
        track.dataset.index = '0';
        track.style.transform = 'translateX(0)';
      }, 500);
    }

    setTimeout(() => {
      track.dataset.animating = 'false';
    }, 500);
  };
}

function destroyCarousel() {
  const track = document.querySelector('.points-list');
  if (!track) return;

  // remove transform e transition
  track.style.transform = '';
  track.style.transition = '';

  // remove clones
  track.querySelectorAll('.clone').forEach(clone => clone.remove());

  // limpa estado
  track.removeAttribute('data-index');
  track.removeAttribute('data-animating');
}
