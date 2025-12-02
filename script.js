const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aparece');
    }
  });
}, { threshold: 0.25 });
cards.forEach(card => observer.observe(card));

// Animação suave no header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  header.style.backgroundPosition = `center ${offset * 0.5}px`;
});