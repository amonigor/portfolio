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
for (let i = 0; i < document.querySelectorAll('.skill-set').length; i++) {
  ScrollReveal().reveal(
    `#skill-set-${i}`,
    {
      ...slideToRight,
      distance: '1000%',
      delay: (150 * (i + 1))
    }
  );
}

ScrollReveal().reveal('#portfolio', slideToRight);
for (let i = 0; i < document.querySelectorAll('.portfolio-item').length; i++) {
  ScrollReveal().reveal(
    `#portfolio-item-${i}`,
    {
      ...slideToRight,
      distance: '1000%',
      delay: (150 * (i + 1))
    }
  );
}

ScrollReveal().reveal('#timeline', slideToRight);
for (let i = 0; i < document.querySelectorAll('.timeline-item').length; i++) {
  ScrollReveal().reveal(
    `#timeline-item-${i}`,
    {
      ...slideToRight,
      distance: '1000%',
      delay: (150 * (i + 1))
    }
  );
}

ScrollReveal().reveal('#contact', slideToRight);
for (let i = 0; i < document.querySelectorAll('.contact-item').length; i++) {
  ScrollReveal().reveal(
    `#contact-item-${i}`,
    {
      ...slideToRight,
      distance: '1000%',
      delay: (150 * (i + 1))
    }
  );
}