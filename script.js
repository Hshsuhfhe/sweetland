// Анимация появления элементов с плавным выездом
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate");

  animatedElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 200); // задержка между элементами
  });
});
