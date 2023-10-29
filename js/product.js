document.addEventListener("DOMContentLoaded", function () {
    const productInfo = document.getElementById("product-info");
    const showProductInfoButton = document.getElementById("show-product-info");
  
    showProductInfoButton.addEventListener("click", function () {
        console.log("click")
      if (productInfo.style.right === "-100%") {
        productInfo.style.right = "0";
        productInfo.style.width = "100%";
      } else {
        productInfo.style.right = "-100%";
      }
    });
  });