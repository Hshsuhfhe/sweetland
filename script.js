// Появление элементов при скролле
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.1});

animatedElements.forEach(el => {
  observer.observe(el);
});

