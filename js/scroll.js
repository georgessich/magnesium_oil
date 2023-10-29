// Функция для обработки видимости секции
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target); // Прекращаем отслеживание после анимации
      }
  });
}

// Настройка IntersectionObserver
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2 // Когда секция видна на 20%, начинаем анимацию
};

const observer = new IntersectionObserver(handleIntersection, options);

// Находим секцию для анимации
const animationSection = document.querySelectorAll('.animation-section');

// Начинаем отслеживание
observer.observe(animationSection);