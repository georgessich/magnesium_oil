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