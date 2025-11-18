// scroll reveal + back-to-top + keyboard UX
document.addEventListener('DOMContentLoaded', function () {
  // Reveal sections
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => observer.observe(r));

  // Back to top button
  const back = document.getElementById('backToTop');
  const showAfter = 320; // px
  window.addEventListener('scroll', () => {
    if (!back) return;
    if (window.scrollY > showAfter) back.classList.add('visible');
    else back.classList.remove('visible');
  });
  if (back) {
    back.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // keyboard focus outlines (accessibility)
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('show-focus');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);
});
