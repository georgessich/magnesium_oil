if (window.innerWidth <= 768) {
    const pages = document.querySelectorAll('.body-product__item');
    const productsContainer = document.getElementById('body-products')
    let currentPage = 0;

    function scrollToPage(pageIndex) {
        if (pageIndex >= 0 && pageIndex < pages.length) {
            currentPage = pageIndex;
            const newPosition = pageIndex * 100;
            pages.forEach((page) => {
                page.style.transform = `translateY(-${newPosition}%)`;
            })
            if(pageIndex === 3 || pageIndex === 0) {
                docSlider.enable(true)
            } else {
                docSlider.enable(false)
            }
            console.log(pageIndex)
            // document.querySelector('.body-product__items').style.transform = `translateY(-${newPosition}%)`;
        }
    }

    productsContainer.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            // Прокрутка вниз
            scrollToPage(currentPage + 1);
        } else if (event.deltaY < 0) {
            // Прокрутка вверх
            scrollToPage(currentPage - 1);
        }
    });

    scrollToPage(0);
}