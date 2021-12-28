const effects = ['fade', 'fade-top', 'fade-left', 'fade-right', 'fade-navbar-right'];

effects.forEach(effect => {
  const observer = new IntersectionObserver(entries => {
    document.querySelector('.logo').classList.add('fade-animation');
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`${effect}-animation`);
      }
    });
  });
  document.querySelectorAll(`.${effect}`).forEach(element => {
    observer.observe(element);
  });
});