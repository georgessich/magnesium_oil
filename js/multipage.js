let swipeEnd = false;
const bodyWrapper = document.querySelector('.body__product-wrapper')
const bodyItems = document.querySelector('.body__product-items')
const bodyItemCard = document.querySelectorAll('.body__product-item')
function updateClasses () {
  if (window.innerWidth < 1024) {
    bodyWrapper.classList.add('swiper')
    bodyItems.classList.add('swiper-wrapper')
    bodyItemCard.forEach(function(element) {
      element.classList.add('swiper-slide')
    })
  } else {
    bodyWrapper.classList.remove('swiper')
    bodyItems.classList.remove('swiper-wrapper')
    bodyItemCard.forEach(function(element) {
      element.classList.remove('swiper-slide')
    })
  }
} 
window.addEventListener('load', updateClasses);
window.addEventListener('resize', updateClasses);
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  anchors: [
    "page1",
    "page2",
    "page3",
    "page4",
    "page5",
    "page6",
    "page7",
    "page8",
    "page9",
  ],
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 600,
  scrollBar: false,
  easing: "easeInOutCubic",
  easingcss3: "ease",
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: "#element1, .element2",
  scrollOverflow: true,
  scrollOverflowMacStyle: false,
  scrollOverflowReset: false,
  touchSensitivity: 15,
  bigSectionsDestination: null,
  fixedElements: ".header",
  afterLoad: function (origin, destination, direction, trigger) {
    var origin = this;
    if(origin.index == 1 && window.innerWidth <= 724) {
      fullpage_api.setAllowScrolling(false);
    }
    if (origin.index == 3 && window.innerWidth < 1024) {
      fullpage_api.setAllowScrolling(false);
    }


  },
  onSlideLeave: function (origin, destination, direction, trigger) {
    if (origin.index == 3) {
      swiper.slideTo(0);
    }
    if (origin.index == 1) {
      fullpage_api.setAllowScrolling(true);
    }
  },
});
function initSwiper() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth < 1024) {
    const swiper = new Swiper(".swiper", {
      direction: "vertical",
      speed: 400,
      slidesPerView: 1,
      spaceBetween: 100,
      on: {
        reachBeginning: function () {
          swipeEnd = true;
          fullpage_api.setAllowScrolling(true);
        },
        reachEnd: function () {
          swipeEnd = true;
    
          fullpage_api.setAllowScrolling(true);
        },
      },
    });
  }
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);