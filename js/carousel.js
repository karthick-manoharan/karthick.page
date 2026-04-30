function initCarousel(el) {
  const track = el.querySelector('.carousel-track');
  const slides = el.querySelectorAll('.carousel-slide');
  const prevBtn = el.querySelector('.carousel-prev');
  const nextBtn = el.querySelector('.carousel-next');
  const dots = el.querySelectorAll('.carousel-dot');
  let current = 0;

  function go(index) {
    current = Math.max(0, Math.min(index, slides.length - 1));
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === slides.length - 1;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => go(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => go(current + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => go(i)));

  go(0);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.preview-carousel').forEach(initCarousel);
});
