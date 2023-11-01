const accordeonItems = document.querySelectorAll('.accordeon__item');

accordeonItems.forEach((item, index) => {
    const title = item.querySelector('.accordeon__title');
    const content = item.querySelector('.accordeon__content');
  
    title.addEventListener('click', () => {

      accordeonItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordeon__content').style.maxHeight = '0';
        }
      });
  

      if (item.classList.contains('active')) {
        item.classList.remove('active');
        content.style.maxHeight = '0';
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  

    if (index === 0) {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });

  let currentAccordeonItem = 0; // Индекс текущего активного элемента аккордеона
  const hairBoosterSection = document.getElementById('hair-booster');
  hairBoosterSection.addEventListener('wheel', (event) => {
      const accordeonItems = document.querySelectorAll('.accordeon__item');
      const totalItems = accordeonItems.length;
  
      // Определение направления скролла (1 - вниз, -1 - вверх)
      const direction = event.deltaY > 0 ? 1 : -1;
  
      // Если скролл вниз и текущий элемент меньше общего количества элементов аккордеона
      if (direction === 1 && currentAccordeonItem < totalItems) {
          // Закрываем все активные элементы аккордеона
          accordeonItems.forEach(item => {
              item.classList.remove('active');
              item.querySelector('.accordeon__content').style.maxHeight = '0';
          });
  
          // Открываем следующий элемент аккордеона
          accordeonItems[currentAccordeonItem].classList.add('active');
          accordeonItems[currentAccordeonItem].querySelector('.accordeon__content').style.maxHeight = 
              accordeonItems[currentAccordeonItem].querySelector('.accordeon__content').scrollHeight + 'px';
  
          // Увеличиваем переменную для следующего скролла
          currentAccordeonItem++;
      } else if (direction === -1 && currentAccordeonItem > 0) {
          // Если скролл вверх и текущий элемент больше 0
          // Закрываем текущий активный элемент и открываем предыдущий
          currentAccordeonItem--;
  
          // Закрываем все элементы аккордеона
          accordeonItems.forEach(item => {
              item.classList.remove('active');
              item.querySelector('.accordeon__content').style.maxHeight = '0';
          });
  
          // Открываем предыдущий элемент аккордеона
          accordeonItems[currentAccordeonItem].classList.add('active');
          accordeonItems[currentAccordeonItem].querySelector('.accordeon__content').style.maxHeight = 
              accordeonItems[currentAccordeonItem].querySelector('.accordeon__content').scrollHeight + 'px';
      } else {
          // Выполняйте вашу логику для перехода к следующему экрану
          // ...
          docSlider.jumpPage(3);
      }
  
      // Отменяем стандартное поведение скролла страницы
      event.preventDefault();
  });

  let startY = 0;
  let endY = 0;
  const touchSensitivity = 50; // Порог чувствительности для определения свайпа
  

  
  hairBoosterSection.addEventListener('touchstart', (event) => {
      startY = event.touches[0].clientY;
  });
  
  hairBoosterSection.addEventListener('touchend', (event) => {
      endY = event.changedTouches[0].clientY;
      const deltaY = endY - startY;
  
      if (deltaY > touchSensitivity && currentAccordeonItem < totalItems - 1) {
          // Свайп вниз
          currentAccordeonItem++;
      } else if (deltaY < -touchSensitivity && currentAccordeonItem > 0) {
          // Свайп вверх
          currentAccordeonItem--;
      }
  
      updateAccordeon();
  });
  
  function updateAccordeon() {
      const accordeonItems = document.querySelectorAll('.accordeon__item');
      const totalItems = accordeonItems.length;
  
      accordeonItems.forEach(item => {
          item.classList.remove('active');
          item.querySelector('.accordeon__content').style.maxHeight = '0';
      });
  
      accordeonItems[currentAccordeonItem].classList.add('active');
      accordeonItems[currentAccordeonItem].querySelector('.accordeon__content').style.maxHeight =
          accordeonItems[currentAccordeonItem].querySelector('.accordeon__content').scrollHeight + 'px';
  }