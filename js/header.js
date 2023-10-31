const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero");
const headerLinks = document.querySelectorAll('.header__menu-link');
const headerBtn = document.querySelector('.header__btn');
const logoImg = document.getElementById("logo-img");
const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};
let activeLinkId = null;
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      logoImg.src = "./img/logo-black.png";
    } else {
      header.classList.remove("nav-scrolled");
      logoImg.src = "./img/logo-white.png";
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetId = entry.target.id;
      
      headerLinks.forEach((link) => {
        link.classList.remove("active-link");
      });

      headerLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${targetId}`) {
          link.classList.add("active-link");
          activeLinkId = targetId;
        } else {
          link.classList.remove("active-link");
        }
      });

      if(targetId === "buy") {
        headerBtn.classList.add('active-btn')
      } else {
        headerBtn.classList.remove('active-btn')
      }
      if(targetId === "hair-booster") {
        headerLinks[0].classList.add('active-link');
      }
      if(targetId === "body-products") {
        headerLinks[1].classList.add('active-link');
      }
    }
  });
}, { threshold: 0.5 });

const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  sectionObserver.observe(section);
});