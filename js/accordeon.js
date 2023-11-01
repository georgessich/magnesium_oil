const accordeonItems = document.querySelectorAll(".accordeon__item");

accordeonItems.forEach((item, index) => {
  const title = item.querySelector(".accordeon__title");
  const content = item.querySelector(".accordeon__content");

  title.addEventListener("click", () => {
    accordeonItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".accordeon__content").style.maxHeight = "0";
      }
    });

    if (item.classList.contains("active")) {
      item.classList.remove("active");
      content.style.maxHeight = "0";
    } else {
      item.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });

  if (index === 0) {
    item.classList.add("active");
    content.style.maxHeight = content.scrollHeight + "px";
  }
});

let currentAccordeonItem = 0; 
const hairBoosterSection = document.getElementById("hair-booster");
hairBoosterSection.addEventListener("wheel", (event) => {
  const accordeonItems = document.querySelectorAll(".accordeon__item");
  const totalItems = accordeonItems.length;


  const direction = event.deltaY > 0 ? 1 : -1;

 
  if (direction === 1 && currentAccordeonItem < totalItems) {

    accordeonItems.forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordeon__content").style.maxHeight = "0";
    });


    accordeonItems[currentAccordeonItem].classList.add("active");
    accordeonItems[currentAccordeonItem].querySelector(
      ".accordeon__content"
    ).style.maxHeight =
      accordeonItems[currentAccordeonItem].querySelector(".accordeon__content")
        .scrollHeight + "px";


    currentAccordeonItem++;
  } else if (direction === -1 && currentAccordeonItem > 0) {

    currentAccordeonItem--;


    accordeonItems.forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordeon__content").style.maxHeight = "0";
    });

  
    accordeonItems[currentAccordeonItem].classList.add("active");
    accordeonItems[currentAccordeonItem].querySelector(
      ".accordeon__content"
    ).style.maxHeight =
      accordeonItems[currentAccordeonItem].querySelector(".accordeon__content")
        .scrollHeight + "px";
  } else {
   
    docSlider.jumpPage(3);
  }


  event.preventDefault();
});

// Функция, которая автоматически раскроет второй элемент аккордеона на устройствах с шириной экрана < 725 пикселей
function autoOpenSecondAccordionItem() {
  if (window.innerWidth < 725) {
    // Убедимся, что второй элемент аккордеона существует
    if (accordeonItems.length > 1) {
      // Закроем все элементы аккордеона
      accordeonItems.forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".accordeon__content").style.maxHeight = "0";
      });

      // Откроем второй элемент аккордеона
      const secondItem = accordeonItems[1]; // Второй элемент
      secondItem.classList.add("active");
      const content = secondItem.querySelector(".accordeon__content");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}

// Вызовем функцию при загрузке страницы и при изменении размера окна
window.addEventListener("load", autoOpenSecondAccordionItem);
window.addEventListener("resize", autoOpenSecondAccordionItem);