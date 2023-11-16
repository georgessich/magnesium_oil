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
        totalContentHeight += otherItem.querySelector(
          ".accordeon__content"
        ).scrollHeight;
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

let currentAccordeonItem = 0;
const hairBoosterSection = document.getElementById("hair-booster-wrap");
let shouldScroll = true;

function openNextAccordeonItem() {
  if (currentAccordeonItem < accordeonItems.length) {
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
    shouldScroll = false;
  } else {
    shouldScroll = true;
  }

  if (isMobile) {
    let totalContentHeight = 0;
    accordeonItems.forEach((otherItem) => {
      if (otherItem.classList.contains("active")) {
        totalContentHeight += otherItem.querySelector(
          ".accordeon__content"
        ).scrollHeight;
      }
    });

    const newImageHeight = originalImageHeight - totalContentHeight;
    image.style.maxHeight = newImageHeight + "px";
  } else {
    image.style.maxHeight = "100%";
  }
  console.log(currentAccordeonItem);
}

hairBoosterSection.addEventListener("wheel", (event) => {
  // if (!shouldScroll) return;

  const direction = event.deltaY > 0 ? 1 : -1;

  if (direction === 1) {
    openNextAccordeonItem();
    if (currentAccordeonItem >= 4) {
      setTimeout(function () {
        fullpage_api.setAllowScrolling(true);
      }, 600);
    } else {
      fullpage_api.setAllowScrolling(false);
    }
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
    if (currentAccordeonItem <= 1) {
      setTimeout(function () {
        fullpage_api.setAllowScrolling(true);
      }, 600);
    } else {
      fullpage_api.setAllowScrolling(false);
    }
  }

  event.preventDefault();
});

let touchStartY = 0;
let touchEndY = 0;

hairBoosterSection.addEventListener("touchstart", (event) => {
  touchStartY = event.touches[0].clientY;
  fullpage_api.setAllowScrolling(false);
});

hairBoosterSection.addEventListener("touchmove", (event) => {
  touchEndY = event.touches[0].clientY;
});

hairBoosterSection.addEventListener("touchend", () => {
  const deltaY = touchEndY - touchStartY;

  console.log(currentAccordeonItem);
  if (Math.abs(deltaY) > 50) {
    const direction = deltaY > 0 ? -1 : 1;
    if (direction === 1) {
      openNextAccordeonItem();
      if (currentAccordeonItem >= 4) {
        setTimeout(function () {
          fullpage_api.setAllowScrolling(true);
        }, 600);
      } else {
        fullpage_api.setAllowScrolling(false);
      }
    } else if (direction === -1 && currentAccordeonItem >= 1) {
      currentAccordeonItem--;

      accordeonItems.forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".accordeon__content").style.maxHeight = "0";
      });

      accordeonItems[currentAccordeonItem].classList.add("active");
      accordeonItems[currentAccordeonItem].querySelector(
        ".accordeon__content"
      ).style.maxHeight =
        accordeonItems[currentAccordeonItem].querySelector(
          ".accordeon__content"
        ).scrollHeight + "px";
      if (currentAccordeonItem <= 1) {
        setTimeout(function () {
          fullpage_api.setAllowScrolling(true);
        }, 600);
      }
    }
  }
});

// const accordeonItems = document.querySelectorAll(".accordeon__item");
// const image = document.querySelector(".hair-product--img");

// let isMobile = window.innerWidth < 725;
// let originalImageHeight = image.getBoundingClientRect().height;

// function toggleAccordionItem(item) {
//   const content = item.querySelector(".accordeon__content");
//   const isActive = item.classList.contains("active");

//   accordeonItems.forEach((otherItem) => {
//     if (otherItem !== item) {
//       otherItem.classList.remove("active");
//       otherItem.querySelector(".accordeon__content").style.maxHeight = "0";
//     }
//   });

//   if (!isActive) {
//     item.classList.add("active");
//     content.style.maxHeight = content.scrollHeight + "px";
//   } else {
//     item.classList.remove("active");
//     content.style.maxHeight = "0";
//   }

//   if (isMobile) {
//     let totalContentHeight = 0;
//     accordeonItems.forEach((otherItem) => {
//       if (otherItem.classList.contains("active")) {
//         totalContentHeight += otherItem.querySelector(
//           ".accordeon__content"
//         ).scrollHeight;
//       }
//     });

//     const newImageHeight = originalImageHeight - totalContentHeight;
//     image.style.maxHeight = newImageHeight + "px";
//   } else {
//     image.style.maxHeight = "100%";
//   }
// }

// accordeonItems.forEach((item, index) => {
//   const title = item.querySelector(".accordeon__title");

//   title.addEventListener("click", () => {
//     toggleAccordionItem(item);
//   });

//   if (index === 0) {
//     item.classList.add("active");
//     toggleAccordionItem(item);
//   }
// });

// window.addEventListener("resize", () => {
//   isMobile = window.innerWidth < 725;
//   if (isMobile) {
//     autoOpenSecondAccordionItem();
//   } else {
//     image.style.maxHeight = "100%";
//   }
// });
// let currentAccordeonItem = 0;

// const hairBoosterSection = document.getElementById("hair-booster");
// let shouldScroll = true;

// function openNextAccordeonItem() {
//   if (currentAccordeonItem < accordeonItems.length) {
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
//     docSlider.enable(false);
//   } else {
//     shouldScroll = true;

//     docSlider.enable(true);
//   }
// }
// let isHairBoosterSectionHovered = false;

// // Сделал открытие аккордеона только при наведении на него, но сейчас проблема в наложении скролов

// hairBoosterSection.addEventListener("mouseenter", function () {
//   isHairBoosterSectionHovered = true;
// });

// hairBoosterSection.addEventListener("mouseleave", function () {
//   isHairBoosterSectionHovered = false;
// });

// document.addEventListener("wheel", function (event) {
//   if (isHairBoosterSectionHovered) {
//     if (!shouldScroll) return;

//     const direction = event.deltaY > 0 ? 1 : -1;

//     if (direction === 1) {
//       openNextAccordeonItem();
//     } else if (direction === -1 && currentAccordeonItem > 0) {
//       currentAccordeonItem--;

//       accordeonItems.forEach((item) => {
//         item.classList.remove("active");
//         item.querySelector(".accordeon__content").style.maxHeight = "0";
//       });

//       accordeonItems[currentAccordeonItem].classList.add("active");
//       accordeonItems[currentAccordeonItem].querySelector(
//         ".accordeon__content"
//       ).style.maxHeight =
//         accordeonItems[currentAccordeonItem].querySelector(
//           ".accordeon__content"
//         ).scrollHeight + "px";
//     }

//     event.preventDefault();
//   }
// });
