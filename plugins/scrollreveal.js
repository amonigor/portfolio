import ScrollReveal from "scrollreveal";

const slideToBottom = {
  distance: '50%',
  origin: 'top',
  opacity: null
};

const slideToRight = {
  distance: '100%',
  origin: 'left',
  opacity: null
};

ScrollReveal().reveal('#banner', slideToBottom);

ScrollReveal().reveal('#about-me', slideToRight);
ScrollReveal().reveal('.skill-set', slideToRight);

ScrollReveal().reveal('#portfolio', slideToRight);
ScrollReveal().reveal('#contact', slideToRight);