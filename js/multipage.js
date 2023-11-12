if (window.innerWidth <= 1024 && window.innerHeight > 325) {
  const pages = document.querySelectorAll(".body__product-item");
  const productsContainer = document.getElementById("body__product");
  let currentPage = 0;
  let touchStartY = null;

  function scrollToPage(pageIndex) {
    if (pageIndex >= 0 && pageIndex < pages.length) {
      currentPage = pageIndex;
      const newPosition = pageIndex * 100;
      pages.forEach((page) => {
        page.style.transform = `translateY(-${newPosition}%)`;
      });
    }
    if (pageIndex >= 3 || pageIndex <= 0) {
        setTimeout(function() {
          docSlider.enable(true);
        }, 600); 
      } else {
        docSlider.enable(false);
      }
  }

  productsContainer.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      scrollToPage(currentPage + 1);
    } else if (event.deltaY < 0) {
      scrollToPage(currentPage - 1);
    }
  });

  productsContainer.addEventListener("touchstart", (event) => {
    touchStartY = event.touches[0].clientY;
  });

  productsContainer.addEventListener("touchmove", (event) => {
    if (touchStartY !== null) {
      const touchMoveY = event.touches[0].clientY;
      const deltaY = touchMoveY - touchStartY;
      if (deltaY > 50) {

        scrollToPage(currentPage - 1);
        touchStartY = null; 

      } else if (deltaY < -50) {

        scrollToPage(currentPage + 1);
        touchStartY = null; 

      }
    }
  });

  scrollToPage(0);
}
