// const accordeonItems = document.querySelectorAll(".accordeon__item");
// const image = document.querySelector(".hair-product--img");
// accordeonItems.forEach((item, index) => {
//   const title = item.querySelector(".accordeon__title");
//   const content = item.querySelector(".accordeon__content");

//   title.addEventListener("click", () => {
//     accordeonItems.forEach((otherItem) => {
//       if (otherItem !== item) {
//         otherItem.classList.remove("active");
//         otherItem.querySelector(".accordeon__content").style.maxHeight = "0";
       
//       }
//     });

//     if (item.classList.contains("active")) {
//       item.classList.remove("active");
//       content.style.maxHeight = "0";
     
//     } else {
//       item.classList.add("active");
//       content.style.maxHeight = content.scrollHeight + "px";
      
//     }
//   });

//   if (index === 0) {
//     item.classList.add("active");
//     content.style.maxHeight = content.scrollHeight + "px";
//   }
// });

// let currentAccordeonItem = 0; 
// const hairBoosterSection = document.getElementById("hair-booster");
// hairBoosterSection.addEventListener("wheel", (event) => {
//   const accordeonItems = document.querySelectorAll(".accordeon__item");
//   const totalItems = accordeonItems.length;


//   const direction = event.deltaY > 0 ? 1 : -1;

 
//   if (direction === 1 && currentAccordeonItem < totalItems) {

//     accordeonItems.forEach((item) => {
//       item.classList.remove("active");
//       item.querySelector(".accordeon__content").style.maxHeight = "0";
//     });


//     accordeonItems[currentAccordeonItem].classList.add("active");
//     accordeonItems[currentAccordeonItem].querySelector(
//       ".accordeon__content"
//     ).style.maxHeight =
//       accordeonItems[currentAccordeonItem].querySelector(".accordeon__content")
//         .scrollHeight + "px";


//     currentAccordeonItem++;
//   } else if (direction === -1 && currentAccordeonItem > 0) {

//     currentAccordeonItem--;


//     accordeonItems.forEach((item) => {
//       item.classList.remove("active");
//       item.querySelector(".accordeon__content").style.maxHeight = "0";
//     });

  
//     accordeonItems[currentAccordeonItem].classList.add("active");
//     accordeonItems[currentAccordeonItem].querySelector(
//       ".accordeon__content"
//     ).style.maxHeight =
//       accordeonItems[currentAccordeonItem].querySelector(".accordeon__content")
//         .scrollHeight + "px";
//   } else {
   
//     // docSlider.jumpPage(3);
//   }


//   event.preventDefault();
// });

// // Функция, которая автоматически раскроет второй элемент аккордеона на устройствах с шириной экрана < 725 пикселей
// function autoOpenSecondAccordionItem() {
//   if (window.innerWidth < 725) {
//     // Убедимся, что второй элемент аккордеона существует
//     if (accordeonItems.length > 1) {
//       // Закроем все элементы аккордеона
//       accordeonItems.forEach((item) => {
//         item.classList.remove("active");
//         item.querySelector(".accordeon__content").style.maxHeight = "0";
//       });

//       // Откроем второй элемент аккордеона
//       const secondItem = accordeonItems[1]; // Второй элемент
//       secondItem.classList.add("active");
//       const content = secondItem.querySelector(".accordeon__content");
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   }
// }

// // Вызовем функцию при загрузке страницы и при изменении размера окна
// window.addEventListener("load", autoOpenSecondAccordionItem);
// window.addEventListener("resize", autoOpenSecondAccordionItem);


const accordeonItems = document.querySelectorAll(".accordeon__item");
const image = document.querySelector(".hair-product--img");
let isMobile = window.innerWidth < 725;
let originalImageHeight = image.getBoundingClientRect().height;

function toggleAccordionItem(item) {
  const content = item.querySelector(".accordeon__content");
  const isActive = item.classList.contains("active");

  accordeonItems.forEach((otherItem) => {
    if (otherItem !== item) {
      otherItem.classList.remove("active");
      otherItem.querySelector(".accordeon__content").style.maxHeight = "0";
    }
  });

  if (!isActive) {
    item.classList.add("active");
    content.style.maxHeight = content.scrollHeight + "px";
  } else {
    item.classList.remove("active");
    content.style.maxHeight = "0";
  }

  if (isMobile) {
    let totalContentHeight = 0;
    accordeonItems.forEach((otherItem) => {
      if (otherItem.classList.contains("active")) {
        totalContentHeight += otherItem.querySelector(".accordeon__content").scrollHeight;
      }
    });

    const newImageHeight = originalImageHeight - totalContentHeight;
    image.style.maxHeight = newImageHeight + "px";
  } else {
    image.style.maxHeight = "100%";
  }
}

accordeonItems.forEach((item, index) => {
  const title = item.querySelector(".accordeon__title");

  title.addEventListener("click", () => {
    toggleAccordionItem(item);
  });

  if (index === 0) {
    item.classList.add("active");
    toggleAccordionItem(item);
  }
});

window.addEventListener("resize", () => {
  isMobile = window.innerWidth < 725;
  if (isMobile) {
    autoOpenSecondAccordionItem();
  } else {
    image.style.maxHeight = "100%";
  }
});

function autoOpenSecondAccordionItem() {
  if (isMobile && accordeonItems.length > 1) {
    toggleAccordionItem(accordeonItems[1]);
  }
}

window.addEventListener("load", autoOpenSecondAccordionItem);